import { React, useState } from "react";
import "./player1.css";


// 1)[ (INPUTS PRACTICE) Practice on getting values from inputs into an Array and push in h3 tag
const Player = function () {
  const name = "Abdul Samad";
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [push, setPush] = useState([]);

  const addNameHandler = (e, setInput) => {
    setInput(e.target.value);
  };

  const addText = (e) => {
    if (fname !== "" && email !== "") {
      setPush((preVal) => [...preVal, fname, email]);
      setFname("");
      setEmail("");
    }
  };

  return (
    <div>
      <h1 className="heading">Scoreboard</h1>
      <div className="board">
        <h3>{name}</h3>
        <input
          type="text"
          className="rows"
          value={fname}
          onChange={(e) => addNameHandler(e, setFname)}
        />
        <input
          type="text"
          className="rows"
          value={email}
          onChange={(e) => addNameHandler(e, setEmail)}
        />
        <button className="btn" onClick={addText}>
          Add Text
        </button>
        {push.map((item, index) => (
          <h3 key={index}>{item}</h3>
        ))}
      </div>
    </div>
  );
};

export default Player;
