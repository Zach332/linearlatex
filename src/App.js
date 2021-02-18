import './App.css';
import React from "react";
import Matrix from './Matrix';
import InputMatrix from './InputMatrix';
import Operations from './Operations';
import Latex from './Latex';


function App() {
    const [matrix, setMatrix] = React.useState([[]]);
    const [operations, setOperations] = React.useState([{prevMatrix: matrix}]);

    React.useEffect(() => {
        if(operations.length > 1) {
            setOperations((oldOperations) => [{...oldOperations[0], prevMatrix: matrix}, ...oldOperations.slice(1)]);
        } else {
            setOperations((oldOperations) => [{...oldOperations[0], prevMatrix: matrix}]);
        }
    }, [matrix])
    return (
        <div className="App">
            <InputMatrix setMatrix={setMatrix}/>
            <Matrix matrix={matrix} />
            <Operations operations={operations} setOperations={setOperations}/>
            <Latex operations={operations} />
        </div>
    );
}

export default App;
