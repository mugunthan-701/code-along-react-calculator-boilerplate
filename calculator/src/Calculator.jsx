import React, { useReducer } from 'react';
import './Calculator.css';

const ADD_INPUT = "ADD_INPUT";
const CALCULATE = "CALCULATE";
const CLEAR = "CLEAR";
const DELETE = "DELETE";

const Calculator = () => {
  const initState = {
    inputs: "",
    result: "",
  };

  const reducer = (state = initState, action) => {
    switch (action.type) {
      case ADD_INPUT: {
        return { ...state, inputs: state.inputs + action.payload };
      }
      case CALCULATE: {
        try {
          const result = eval(state.inputs);
          return { ...state, result: result.toString(), inputs: result.toString() };
        } catch (error) {
          console.error("Error during calculation:", error);
          return { ...state, result: "Error", inputs: "" };
        }
      }
      case CLEAR: {
        return { ...state, inputs: "", result: "" };
      }
      case DELETE: {
        const newInputs = state.inputs.slice(0, -1);
        return { ...state, inputs: newInputs };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const handleInputs = (value) => {
    dispatch({ type: ADD_INPUT, payload: value });
  };

  const handleClear = () => {
    dispatch({ type: CLEAR });
  };

  const handleCalculate = () => {
    dispatch({ type: CALCULATE });
  };

  const handleDelete = () => {
    dispatch({ type: DELETE });
  };

  return (
    <div className="calculator">
      <p>CALCULATOR</p>
      <div className="display">
        <input type="text" value={state.inputs} readOnly />
        {/* <div>{state.result}</div> */}
      </div>
      <div className="buttons1">
        <button  className="button" onClick={() => handleInputs("1")}>1</button>
        <button  className="button" onClick={() => handleInputs("2")}>2</button>
        <button  className="button" onClick={() => handleInputs("3")}>3</button>
        <button  className="button" onClick={() => handleInputs("+")}>+</button>
        <br />
        <button  className="button" onClick={() => handleInputs("4")}>4</button>
        <button  className="button" onClick={() => handleInputs("5")}>5</button>
        <button className="button"  onClick={() => handleInputs("6")}>6</button>
        <button  className="button" onClick={() => handleInputs("-")}>-</button>
        <br />
        <button  className="button" onClick={() => handleInputs("7")}>7</button>
        <button  className="button" onClick={() => handleInputs("8")}>8</button>
        <button  className="button" onClick={() => handleInputs("9")}>9</button>
        <button  className="button" onClick={() => handleInputs("/")}>/</button>
        <br />
        <button  className="button" onClick={() => handleInputs("0")}>0</button>
        <button  className="button" onClick={() => handleInputs("*")}>*</button>
        <button  className="button" onClick={() => handleCalculate("=")}>=</button>
        <button  className="button" onClick={() => handleDelete("DEL")}>DEL</button>
        <br />
        <button onClick={() => handleClear("ALL CLEAR")} className="all-clear">ALL CLEAR</button>
      </div>
    </div>
  );
};

export default Calculator;
