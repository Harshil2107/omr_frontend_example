import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Key from "./Key";

function App() {
  // usestate for setting a javascript
  // object for storing and using data

  return (
    <div className="App">
      <header className="heading">OMR Scanner and Grader</header>
      <Key></Key>
    </div>
  );
}

export default App;
