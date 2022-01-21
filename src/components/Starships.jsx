import Card from "./Card";

function Starships(props) {
  return (
    <div className="container">
      {props.info.map((item) => (
        <Card name={item.name} key={item.name} />
      ))}
    </div>
  );
}

export default Starships;
