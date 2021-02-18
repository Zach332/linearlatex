import React from 'react'
import Matrix from './Matrix';
import { frac, mult, add, display } from './math'

export default function Operation({index, operation, setOperation, updateNext}) {

    React.useEffect(() => {
        if(!operation.showMatrix) {
            updateOperation();
        }
    }, [operation])

    React.useEffect(() => {
        updateOperation();
    }, [operation.prevMatrix, operation.startRow, operation.multiplier, operation.otherRow])

    const updateOperation = () => {
        if(operation.type == "scale" && Number.isInteger(operation.startRow) && operation.multiplier != null) {
            var newMatrix = [];
            for(var i = 0; i < operation.prevMatrix.length; i++) {
                var thisRow;
                if(i == operation.startRow) {
                    thisRow = [];
                    for(var j = 0; j < operation.prevMatrix.length; j++) {
                        thisRow.push(mult(operation.multiplier, operation.prevMatrix[operation.startRow][j]));
                    }
                } else {
                    thisRow = operation.prevMatrix[i];
                }
                newMatrix.push(thisRow);
            }
            setOperation(index, {...operation, matrix: newMatrix, showMatrix: true})
            updateNext(index, newMatrix);
        } else if(operation.type == "switch" && Number.isInteger(operation.startRow) && Number.isInteger(operation.otherRow)) {
            var newMatrix = [];
            console.log(operation)
            var row1 = JSON.parse(JSON.stringify(operation.prevMatrix[operation.startRow]));
            var row2 = JSON.parse(JSON.stringify(operation.prevMatrix[operation.otherRow]));
            for(var i = 0; i < operation.prevMatrix.length; i++) {
                var thisRow;
                if(i == operation.startRow) {
                    thisRow = row2;
                } else if(i == operation.otherRow) {
                    thisRow = row1;
                } else {
                    thisRow = operation.prevMatrix[i];
                }
                newMatrix.push(thisRow);
            }
            setOperation(index, {...operation, matrix: newMatrix, showMatrix: true})
            updateNext(index, newMatrix);
        } else if(Number.isInteger(operation.startRow) && operation.multiplier != null && Number.isInteger(operation.otherRow)) {
            var newMatrix = [];
            for(var i = 0; i < operation.prevMatrix.length; i++) {
                var thisRow;
                if(i == operation.startRow) {
                    thisRow = [];
                    for(var j = 0; j < operation.prevMatrix.length; j++) {
                        thisRow.push(add(operation.prevMatrix[operation.startRow][j], mult(operation.multiplier, operation.prevMatrix[operation.otherRow][j])));
                    }
                } else {
                    thisRow = operation.prevMatrix[i];
                }
                newMatrix.push(thisRow);
            }
            setOperation(index, {...operation, matrix: newMatrix, showMatrix: true})
            updateNext(index, newMatrix);
        }
    }

    const changeType = (event) => {
        setOperation(index, {...operation, type: event.target.value});
    }

    const adjustStartRow = (event) => {
        let row = parseInt(event.target.value) - 1;
        setOperation(index, {...operation, startRow: row});
    }
    const adjustMultiplier = (event) => {
        setOperation(index, {...operation, multiplier: frac(event.target.value)});
    }
    const adjustOtherRow = (event) => {
        let row = parseInt(event.target.value) - 1;
        setOperation(index, {...operation, otherRow: row});
    }

    var operationDetails;
    if(operation.type == "scale") {
        operationDetails = (
            <span>
                {" row "}
                <input width="10" placeholder="row #" value={operation.startRow} onChange={adjustStartRow} className="p-2"></input>
                {" *= "}
                <input defaultValue={display(operation.multiplier)} onChange={adjustMultiplier} placeholder="multiplier" className="p-2"></input>
            </span>
        )
    } else if(operation.type == "switch") {
        operationDetails = (
            <span>
                {" row "}
                <input width="10" placeholder="row #" value={operation.startRow} onChange={adjustStartRow} className="p-2"></input>
                {" <-> row "}
                <input value={operation.otherRow} onChange={adjustOtherRow} placeholder="row #" className="p-2"></input>
            </span>
        )
    } else {
        operationDetails = (
            <span>
                {" row "}
                <input width="10" value={operation.startRow} onChange={adjustStartRow} placeholder="row #" className="p-2"></input>
                {" += "}
                <input defaultValue={display(operation.multiplier)} onChange={adjustMultiplier} placeholder="multiplier" className="p-2"></input>
                {" * row "}
                <input value={operation.otherRow} onChange={adjustOtherRow} placeholder="row #" className="p-2"></input>
            </span>
        )
    }
    return (
        <div>
            <select
                onChange={changeType}
                value={operation.type}
                style={{width: 100}}
            >
                <option value="add">Add</option>
                <option value="scale">Scale</option>
                <option value="switch">Switch</option>
            </select>
            {operationDetails}
            {operation.showMatrix && <Matrix matrix={operation.matrix} />}
        </div>
    )
}
