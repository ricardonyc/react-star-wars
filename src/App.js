import React, { useState, useEffect } from "react";
import "./App.css";
import Starships from "./components/Starships";
import Header from "./components/Header";
import Practice from "./components/Practice";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  console.log("Component rendered");

  const [starship, setStarship] = useState([]);

  const url = `https://swapi.dev/api/starships/`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStarship(data.results));
  }, []);

  // console.log(starship);

  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Starships info={starship} />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </Router>
  );
}

export default App;
