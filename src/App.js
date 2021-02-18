import './App.css';
import React from "react";
import Matrix from './Matrix';
import InputMatrix from './InputMatrix';


function App() {
    const [matrix, setMatrix] = React.useState([[]]);
    return (
        <div className="App">
            <InputMatrix setMatrix={setMatrix}/>
            <Matrix matrix={matrix} />
        </div>
    );
}

export default App;
