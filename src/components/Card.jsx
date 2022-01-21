import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Card(props) {
  function random() {
    console.log(`"${props.name}" clicked!`);
  }

  return (
    <div className="name--box" onClick={random}>
      <h1>{props.name}</h1>
    </div>
  );
}

export default Card;
