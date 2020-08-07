import React from "react";
import Card from "./Card";
import "./list.scss";

const List = (props) => {
  const characterItems = props.characters.map((character) => {
    return <Card key={character.id} character={character}></Card>;
  });

  return (
    <div className="listContainer">
      <ul className="listContainer-list">
        {characterItems}
        {/* <Card>{characterItems}</Card> */}
      </ul>
    </div>
  );
};

export default List;
