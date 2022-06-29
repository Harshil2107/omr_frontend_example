import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  // usestate for setting a javascript
  // object for storing and using data
  const [data, setdata] = useState({
    1: -1,
    2: -1,
    3: -1,
    4: -1,
    5: -1,
  });

  const handleClick = () => {
    setdata(data);
    console.log(data);
  };

  const ans1 = (event) => {
    data[1] = parseInt(event.target.value);
  };
  const ans2 = (event) => {
    data[2] = parseInt(event.target.value);
  };
  const ans3 = (event) => {
    data[3] = parseInt(event.target.value);
  };
  const ans4 = (event) => {
    data[4] = parseInt(event.target.value);
  };
  const ans5 = (event) => {
    data[5] = parseInt(event.target.value);
  };

  return (
    <div className="App">
      <div className="Anskey">
        <h2 className="Headinginp">
          Enter answers to the five questions (0 being A, 1 being B and so on
          till 4 being E)
        </h2>
        <div>
          <input
            onChange={ans1}
            className="Inputdiv"
            placeholder="Answer for questoin 1"
          />
          <input
            onChange={ans2}
            className="Inputdiv"
            placeholder="Answer for questoin 2"
          />
          <input
            onChange={ans3}
            className="Inputdiv"
            placeholder="Answer for questoin 3"
          />
          <input
            onChange={ans4}
            className="Inputdiv"
            placeholder="Answer for questoin 4"
          />
          <input
            onChange={ans5}
            className="Inputdiv"
            placeholder="Answer for questoin 5"
          />

          <button onClick={handleClick} className="btn_submit">
            Submit Ans key
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
