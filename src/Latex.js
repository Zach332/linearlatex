import React from 'react'
import { display } from './math'

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
        opLatex += "r_" + (parseInt(operation.startRow) + 1) + " \\rightsquigarrow r_" + (parseInt(operation.startRow) + 1) + " + r_" + (parseInt(operation.otherRow) + 1) + "\n";
        opLatex += "\\begin{bmatrix}\n";
        for(var i = 0; i < operation.matrix.length; i++) {
            for(var j = 0; j < operation.matrix[i].length; j++) {
                if(j != operation.matrix[i].length - 1) {
                    opLatex += display(operation.matrix[i][j]) + " & ";
                } else if(i == operation.matrix.length - 1) {
                    opLatex += display(operation.matrix[i][j]) + "\n";
                } else {
                    opLatex += display(operation.matrix[i][j]) + "\\\\\n";
                }
            }
        }
        opLatex += "\\end{bmatrix}\n";
        opLatex += "\\end{displaymath}";
        return opLatex;
    }
    

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Latex</h5>
                <p className="card-text" style={{ whiteSpace: "pre", textAlign: "left" }}>
                    {latex}
                </p>
                <a href="#" className="btn btn-primary">Overleaf</a>
            </div>
        </div>
        
    )
}
