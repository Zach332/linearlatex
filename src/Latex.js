import React from 'react'

export default function Latex({ operations }) {
    const [latex, setLatex] = React.useState("");

    React.useEffect(() => {
        try {
            var newLatex = "";
            for(var i = 0; i < operations.length - 1; i++) {
                newLatex += getOpLatex(operations[i]) + "\n\n";
            }
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
                    opLatex += ldisplay(operation.matrix[i][j]) + " & ";
                } else if(i == operation.matrix.length - 1) {
                    opLatex += ldisplay(operation.matrix[i][j]) + "\n";
                } else {
                    opLatex += ldisplay(operation.matrix[i][j]) + "\\\\\n";
                }
            }
        }
        opLatex += "\\end{bmatrix}\n";
        opLatex += "\\end{displaymath}";
        return opLatex;
    }

    const ldisplay = (frac) => {
        if(frac[1] == 1) {
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
                <a href="https://www.overleaf.com/" target="_blank" className="btn btn-primary">Overleaf</a>
            </div>
        </div>
        
    )
}
