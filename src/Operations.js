import React from 'react'
import Operation from './Operation'

export default function Operations({operations, setOperations}) {

    React.useEffect(() => {
        if(operations[operations.length - 1].showMatrix) {
            setOperations((oldOperations) => oldOperations.concat({prevMatrix: oldOperations[oldOperations.length - 1]}))
        }
    }, [operations])

    const setOperation = (index, newOperation) => {
        setOperations((oldOperations) => [...oldOperations.slice(0,index), newOperation, ...oldOperations.slice(index+1, oldOperations.length)]);
    }

    return (
        <div>
            {operations.map((operation, index) => (
                <Operation index={index} operation={operation} setOperation={setOperation} />
            ))
            }
        </div>
    )
}
