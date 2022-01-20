import React, { useState, useEffect } from "react";
import Card from "./Card";
// import CardInfo from "./CardInfo";

function Starships() {
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
    <div className="container">
      {
        starship.map(item => (
          <Card name={item.name} key={item.name} />
        ))
      }
    </div>
  );
}

export default Starships;
