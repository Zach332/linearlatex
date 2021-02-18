import React from 'react'
import Operation from './Operation'

export default function Operations({operations, setOperations}) {

    React.useEffect(() => {
        if(operations[operations.length - 1].showMatrix) {
            setOperations((oldOperations) => oldOperations.concat({prevMatrix: oldOperations[oldOperations.length - 1].matrix}))
        }
    }, [operations])

    const updateNext = (index, newMatrix) => {
        if(index < operations.length - 1) {
            setOperations((oldOperations) => [...oldOperations.slice(0,index + 1), {...oldOperations[index+1], prevMatrix: newMatrix}, ...oldOperations.slice(index + 2)])
        }
    }

    const setOperation = (index, newOperation) => {
        setOperations((oldOperations) => [...oldOperations.slice(0,index), newOperation, ...oldOperations.slice(index+1, oldOperations.length)]);
    }

    return (
        <div>
            {operations.map((operation, index) => (
                <Operation index={index} operation={operation} setOperation={setOperation} updateNext={updateNext} />
            ))
            }
        </div>
    )
}
