import React, { useState, useEffect } from "react";
import axios from "axios";

function Starships(props) {
  const url = `https://swapi.dev/api/starships/9/`;
  const [starShip, setStarShip] = useState([]);


  useEffect(() => {
    fetch(url)
        .then(res => res.json())

  }, []);


  return (
      <div>

      </div>
  )
}

export default Starships;
