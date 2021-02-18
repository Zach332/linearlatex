import React from 'react'
import Matrix from './Matrix';

export default function Operation({index, operation, setOperation}) {

    React.useEffect(() => {
        if(!operation.showMatrix) {
            updateOperation();
        }
    }, [operation])

    React.useEffect(() => {
        updateOperation();
    }, [operation.prevMatrix, operation.startRow, operation.multiplier, operation.otherRow])

    const updateOperation = () => {
        if(operation.startRow && operation.multiplier && operation.otherRow) {
            var newMatrix = [];
            for(var i = 0; i < operation.prevMatrix.length; i++) {
                var thisRow;
                if(i == operation.startRow) {
                    thisRow = [];
                    for(var j = 0; j < operation.prevMatrix.length; j++) {
                        thisRow.push(operation.prevMatrix[operation.startRow][j] + (operation.multiplier * operation.prevMatrix[operation.otherRow][j]));
                    }
                } else {
                    thisRow = operation.prevMatrix[i];
                }
                newMatrix.push(thisRow);
            }
            setOperation(index, {...operation, matrix: newMatrix, showMatrix: true})
        }
    }

    const adjustStartRow = (event) => {
        setOperation(index, {...operation, startRow: event.target.value});
    }
    const adjustMultiplier = (event) => {
        setOperation(index, {...operation, multiplier: event.target.value});
    }
    const adjustOtherRow = (event) => {
        setOperation(index, {...operation, otherRow: event.target.value});
    }
    return (
        <div>
            {"row "}
            <input width="10" onChange={adjustStartRow} className="p-2"></input>
            {" = itself + "}
            <input onChange={adjustMultiplier} className="p-2"></input>
            {" x row "}
            <input onChange={adjustOtherRow} className="p-2"></input>
            {operation.showMatrix && <Matrix matrix={operation.matrix} />}
        </div>
    )
}
