import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const handleButtonClick = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput('');
        setResult(null);
    };

    const handleEvaluate = () => {
        try {
            const evalResult = evaluate(input);
            setInput(evalResult.toString());
            setResult(evalResult);
        } catch (e) {
            setInput('Error');
            setResult(null);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            <h1>React Calculator</h1>
            <div className="calculator" >
                <input type="text" value={input} readOnly />
                { result !== null && <div className="result">{ result }</div> }
                <div className="buttons">
                    <button onClick={() => handleButtonClick('7')}>7</button>
                    <button onClick={() => handleButtonClick('8')}>8</button>
                    <button onClick={() => handleButtonClick('9')}>9</button>
                    <button onClick={() => handleButtonClick('+')}>+</button>

                    <button onClick={() => handleButtonClick('4')}>4</button>
                    <button onClick={() => handleButtonClick('5')}>5</button>
                    <button onClick={() => handleButtonClick('6')}>6</button>
                    <button onClick={() => handleButtonClick('-')}>-</button>

                    <button onClick={() => handleButtonClick('1')}>1</button>
                    <button onClick={() => handleButtonClick('2')}>2</button>
                    <button onClick={() => handleButtonClick('3')}>3</button>
                    <button onClick={() => handleButtonClick('*')}>*</button>

                    <button onClick={handleClear}>C</button>
                    <button onClick={() => handleButtonClick('0')}>0</button>
                    <button onClick={handleEvaluate}>=</button>
                    <button onClick={() => handleButtonClick('/')}>/</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
