import React from 'react'
import { frac } from './math'

export default function InputMatrix( { setMatrix } ) {
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
                thisNewMatRow.push([0,1]);
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

    return (
        <div>
            <div className="p-3"></div>
            <input width="10" onChange={changeRows} className="p-2"></input>
            {" x "}
            <input onChange={changeCols} className="p-2"></input>
            <div className="p-3"></div>
            {keys.map((row => (
                <div className="d-flex justify-content-center">
                    {row.map(key => (
                        <input key={key} index={key} onChange={updateMatrix} className="p-2"></input>
                    ))}
                </div>
            )))}
        </div>
    )
}
