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
        setOperations([{prevMatrix: matrix}]);
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
