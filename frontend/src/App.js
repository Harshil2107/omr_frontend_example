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
    data[1] = event.target.value;
  };
  const ans2 = (event) => {
    data[2] = event.target.value;
  };
  const ans3 = (event) => {
    data[3] = event.target.value;
  };
  const ans4 = (event) => {
    data[4] = event.target.value;
  };
  const ans5 = (event) => {
    data[5] = event.target.value;
  };
  // // Using useEffect for single rendering
  // useEffect(() => {
  //   // Using fetch to fetch the api from
  //   // flask server it will be redirected to proxy
  //   fetch("/data").then((res) =>
  //     res.json().then((data) => {
  //       // Setting a data from api
  //       setdata({
  //         name: data.Name,
  //         age: data.Age,
  //         programming: data.programming,
  //       });
  //     })
  //   );
  // }, []);

  return (
    <div className="App">
      <h2>
        Enter answers to the five questions with 0 being A, 1 being B and so on
        till 4 being E
      </h2>
      <input onChange={ans1} placeholder="Answer for questoin 1" />
      <input onChange={ans2} placeholder="Answer for questoin 2" />
      <input onChange={ans3} placeholder="Answer for questoin 3" />
      <input onChange={ans4} placeholder="Answer for questoin 4" />
      <input onChange={ans5} placeholder="Answer for questoin 5" />

      <button onClick={handleClick} className="btn_submit">
        Submit Ans key
      </button>
    </div>
  );
}

export default App;
