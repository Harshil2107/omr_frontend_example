import "./key.css";
import React, { useState, useEffect } from "react";

function Key() {
  const [data, setdata] = useState({
    1: -1,
    2: -1,
    3: -1,
    4: -1,
    5: -1,
  });
  const [imgfile, setImg] = useState();

  const handleClick = () => {
    setdata(data);
    console.log(data);
  };

  const getopt = (letter) => {
    if (letter === "A" || letter === "a") {
      return 0;
    } else if (letter === "B" || letter === "b") {
      return 1;
    } else if (letter === "C" || letter === "c") {
      return 2;
    } else if (letter === "D" || letter === "d") {
      return 3;
    } else if (letter === "E" || letter === "e") {
      return 4;
    }
  };
  const getimg = (event) => {
    console.log(event.target.files[0]);
    setImg(URL.createObjectURL(event.target.files[0]));
  };
  const ans1 = (event) => {
    data[1] = getopt(event.target.value);
  };
  const ans2 = (event) => {
    data[2] = getopt(event.target.value);
  };
  const ans3 = (event) => {
    data[3] = getopt(event.target.value);
  };
  const ans4 = (event) => {
    data[4] = getopt(event.target.value);
  };
  const ans5 = (event) => {
    data[5] = getopt(event.target.value);
  };
  return (
    <div className="inp-img-div">
      <div className="Imgdiv">
        <h2 className="Headinginp">Add Image:</h2>
        <img src={imgfile}></img>
        <input type="file" onChange={getimg} />
      </div>
      <div className="Anskey">
        <h2 className="Headinginp">
          Enter answers to the five questions (A to E)
        </h2>
        <div>
          <input
            onChange={ans1}
            className="Inputdiv"
            placeholder="Answer for question 1"
          />
          <input
            onChange={ans2}
            className="Inputdiv"
            placeholder="Answer for question 2"
          />
          <input
            onChange={ans3}
            className="Inputdiv"
            placeholder="Answer for question 3"
          />
          <input
            onChange={ans4}
            className="Inputdiv"
            placeholder="Answer for question 4"
          />
          <input
            onChange={ans5}
            className="Inputdiv"
            placeholder="Answer for question 5"
          />

          <button onClick={handleClick} className="btn_submit">
            Submit Ans key
          </button>
        </div>
      </div>
    </div>
  );
}

export default Key;
