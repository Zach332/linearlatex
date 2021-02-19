import React from 'react'

export default function Latex({ operations }) {
    const [latex, setLatex] = React.useState("");

    React.useEffect(() => {
        try {
            var newLatex = "";
            newLatex += getInitialMatrix(operations[0]) + "\n\n";
            newLatex += "\\noindent Obtain RREF:\n\n"
            for(var i = 0; i < operations.length - 1; i++) {
                newLatex += getOpLatex(operations[i]) + "\n\n";
            }
            newLatex += "\\noindent The augmented matrix in reduced row echelon form derived above can be written as the system of equations:\n\n"
            newLatex += getSystemLatex(operations[operations.length - 2]);
            setLatex(newLatex);
        } catch (error) {
            setLatex("Error parsing data")
        }
        
    }, [operations])

    const getOpLatex = (operation) => {
        var opLatex = "\\begin{displaymath}\n";
        if(operation.type == "scale") {
            opLatex += "r_" + (parseInt(operation.startRow) + 1) + " \\rightsquigarrow " + ldisplay(operation.multiplier) + "r_" + (parseInt(operation.startRow) + 1) + "\n";
        } else if(operation.type == "switch") {
            opLatex += "r_" + (parseInt(operation.startRow) + 1)+ " \\leftrightsquigarrow " + "r_" + (parseInt(operation.otherRow) + 1) + "\n";
        } else {
            opLatex += "r_" + (parseInt(operation.startRow) + 1) + " \\rightsquigarrow r_" + (parseInt(operation.startRow) + 1) + " + " + ldisplay(operation.multiplier) + "r_" + (parseInt(operation.otherRow) + 1) + "\n";
        }
        opLatex += "\\begin{bmatrix}\n";
        for(var i = 0; i < operation.matrix.length; i++) {
            for(var j = 0; j < operation.matrix[i].length; j++) {
                if(j != operation.matrix[i].length - 1) {
                    opLatex += ldisplay(operation.matrix[i][j], true) + " & ";
                } else if(i == operation.matrix.length - 1) {
                    opLatex += ldisplay(operation.matrix[i][j], true) + "\n";
                } else {
                    opLatex += ldisplay(operation.matrix[i][j], true) + "\\\\\n";
                }
            }
        }
        opLatex += "\\end{bmatrix}\n";
        opLatex += "\\end{displaymath}";
        return opLatex;
    }

    const getInitialMatrix = (operation) => {
        var opLatex = "\\section{}\n\n";
        opLatex += "Augmented matrix:\n\n";
        opLatex += "\\begin{displaymath}\n";
        opLatex += "\\begin{bmatrix}\n";
        for(var i = 0; i < operation.prevMatrix.length; i++) {
            for(var j = 0; j < operation.prevMatrix[i].length; j++) {
                if(j != operation.prevMatrix[i].length - 1) {
                    opLatex += ldisplay(operation.prevMatrix[i][j], true) + " & ";
                } else if(i == operation.prevMatrix.length - 1) {
                    opLatex += ldisplay(operation.prevMatrix[i][j], true) + "\n";
                } else {
                    opLatex += ldisplay(operation.prevMatrix[i][j], true) + "\\\\\n";
                }
            }
        }
        opLatex += "\\end{bmatrix}\n";
        opLatex += "\\end{displaymath}";
        return opLatex;
    }

    const getSystemLatex = (operation) => {
        var opLatex = "";
        opLatex += "\\begin{displaymath}\n";
        opLatex += "\\systeme{\n";
        for(var i = 0; i < operation.matrix.length; i++) {
            var first = true;
            for(var j = 0; j < operation.matrix[i].length; j++) {
                if(j == operation.matrix[i].length - 1) {
                    if(i == operation.matrix.length - 1) {
                        opLatex += " = " + ldisplay(operation.matrix[i][j], true) + "\n";
                    } else {
                        opLatex += " = " + ldisplay(operation.matrix[i][j], true) + ",\n";
                    }
                } else if(operation.matrix[i][j][0] != 0) {
                    if(first) {
                        opLatex += ldisplay(operation.matrix[i][j]) + "x_" + (j + 1);
                        first = false;
                    } else {
                        opLatex += " + " + ldisplay(operation.matrix[i][j]) + "x_" + (j + 1);
                    }
                } else if(j == operation.matrix.length - 2 && first) {
                    opLatex += ldisplay(operation.matrix[i][j]);
                }
            }
        }
        opLatex += "}\n";
        opLatex += "\\end{displaymath}";
        return opLatex;
    }

    const ldisplay = (frac, display1=false) => {
        if(frac.length > 2) {
            if(frac[0] == 0) {
                return ldisplay(frac[2][0], display1) + frac[2][1];
            } else {
                return ldisplay(frac.slice(0,2), display1) + " + " + ldisplay(frac[2][0], display1) + frac[2][1];
            }
        }
        if(!display1 && frac[1] == 1 && frac[0] == 1) {
            return "";
        } else if(!display1 && frac[1] == 1 && frac[0] == -1) {
            return "-";
        } else if(frac[1] == 1) {
            return frac[0];
        } else {
            return "\\frac{" + frac[0] + "}{" + frac[1] + "}";
        }
    }

    return (
        <div className="card mt-4">
            <div className="card-body">
                <h5 className="card-title">LaTeX</h5>
                <p className="card-text" style={{ whiteSpace: "pre", textAlign: "left" }}>
                    {latex}
                </p>
                <button className="btn btn-info me-3" onClick={() => {navigator.clipboard.writeText(latex)}}>Copy to clipboard</button>
                <a href="https://www.overleaf.com/" target="_blank" className="btn btn-primary">Overleaf</a>
                <p className="card-text" style={{ whiteSpace: "pre", textAlign: "left" }}>
                    {"Remember to add:\n\\usepackage{amsmath}\n\\usepackage{amssymb}\n\\usepackage{systeme}}"}
                </p>
            </div>
        </div>
        
    )
}
