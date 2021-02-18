import React from 'react'
import { frac, display } from './math'

export default function InputMatrix( { matrix, setMatrix } ) {
    const [keys, setKeys] = React.useState([[]]);
    const [rows, setRows] = React.useState(3);
    const [cols, setCols] = React.useState(3);

    React.useEffect(() => {
        var newKeys = [];
        var newMat = [];
        for(var i = 0; i < rows; i++) {
            var thisRow = [];
            var thisNewMatRow = [];
            for(var j = 0; j < cols; j++) {
                thisRow.push(i+","+j);
                if(i < matrix.length && j < matrix[i].length) {
                    thisNewMatRow.push(matrix[i][j]);
                } else {
                    thisNewMatRow.push([0,1]);
                }
            }
            newKeys.push(thisRow)
            newMat.push(thisNewMatRow);
        }
        setKeys(newKeys);
        setMatrix(newMat);
    }, [rows, cols]);

    const changeRows = (event) => {
        setRows(event.target.value)
    }
    const changeCols = (event) => {
        setCols(event.target.value)
    }

    const updateMatrix = (event) => {
        let keyArr = event.target.getAttribute("index").split(",");
        let i = parseInt(keyArr[0]);
        let j = parseInt(keyArr[1]);
        setMatrix((matrix) => [...matrix.slice(0, i), [...matrix[i].slice(0, j), frac(event.target.value), ...matrix[i].slice(j+1,matrix[i].length)], ...matrix.slice(i+1, matrix.length)])
    }

    const x = (key) => {
        let keyArr = key.split(",");
        return keyArr[0];
    }
    const y = (key) => {
        let keyArr = key.split(",");
        return keyArr[1];
    }

    return (
        <div>
            <div className="p-3"></div>
            <input width="10" onChange={changeRows} placeholder="rows" className="p-2"></input>
            {" x "}
            <input onChange={changeCols} placeholder="columns" className="p-2"></input>
            <div className="p-3"></div>
            {keys.map((row => (
                <div className="d-flex justify-content-center">
                    {row.map(key => (
                        <input key={key} index={key} value={display(matrix[x(key)][y(key)])} onChange={updateMatrix} className="p-2"></input>
                    ))}
                </div>
            )))}
        </div>
    )
}
