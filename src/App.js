import React from "react";
import "./App.css";
import { useState } from "react";
import { clear } from "@testing-library/user-event/dist/clear";

const App = () => {
  const [result, setResult] = useState("");
  const handleChange = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (e) {
      setResult("Error");
    }
  };

  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          <button className="highlight" onClick={clear} id="clear">
            Clear
          </button>
          <button className="highlight" onClick={backspace} id="backspace">
            C
          </button>
          <button className="highlight" name="/" onClick={handleChange}>
            &divide;
          </button>
          <button name="7" onClick={handleChange}>
            7
          </button>
          <button name="8" onClick={handleChange}>
            8
          </button>
          <button name="9" onClick={handleChange}>
            9
          </button>
          <button className="highlight" name="*" onClick={handleChange}>
            &times;
          </button>
          <button name="4" onClick={handleChange}>
            4
          </button>
          <button name="5" onClick={handleChange}>
            5
          </button>
          <button name="6" onClick={handleChange}>
            6
          </button>
          <button className="highlight" name="-" onClick={handleChange}>
            &ndash;
          </button>
          <button name="1" onClick={handleChange}>
            1
          </button>
          <button name="2" onClick={handleChange}>
            2
          </button>
          <button name="3" onClick={handleChange}>
            3
          </button>
          <button className="highlight" name="+" onClick={handleChange}>
            +
          </button>
          <button name="0" onClick={handleChange}>
            0
          </button>
          <button name="." onClick={handleChange}>
            .
          </button>
          <button className="highlight" onClick={calculate} id="result">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
