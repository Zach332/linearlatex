import './App.css';
import React from "react";
import Matrix from './Matrix';
import InputMatrix from './InputMatrix';
import Operations from './Operations';
import Latex from './Latex';
import { getOperations, getMatrix, matrixPersistenceKey, operationsPersistenceKey, firstMatrixState, firstOperationsState } from './State';


function App() {
    const [matrix, setMatrix] = React.useState(getMatrix());
    const [operations, setOperations] = React.useState(getOperations());

    React.useEffect(() => {
        if(operations.length > 1) {
            setOperations((oldOperations) => [{...oldOperations[0], prevMatrix: matrix}, ...oldOperations.slice(1)]);
        } else {
            setOperations((oldOperations) => [{...oldOperations[0], prevMatrix: matrix}]);
        }
    }, [matrix])

    React.useEffect(() => {
        localStorage.setItem(matrixPersistenceKey, JSON.stringify(matrix));
    }, [matrix]);

    React.useEffect(() => {
        localStorage.setItem(operationsPersistenceKey, JSON.stringify(operations));
    }, [operations]);

    const reset = () => {
        setMatrix(firstMatrixState);
        setOperations(firstOperationsState);
        window.location.reload();
    }

    return (
        <div className="App">
            <div className="mt-4">
                All changes are saved in local storage.
                <button className="btn btn-secondary btn-sm ms-3" onClick={reset}>
                    Reset
                </button>
            </div>
            <InputMatrix matrix={matrix} setMatrix={setMatrix}/>
            <Matrix matrix={matrix} />
            <Operations operations={operations} setOperations={setOperations}/>
            <Latex operations={operations} />
        </div>
    );
}

export default App;
