import React from "react";

const Card = (props) => {
  return (
    <li className="listContainer-list-item">
      <img
        className="itemImage"
        alt="character"
        src={props.character.img}
      ></img>
      <h1 className="itemTitle">{props.character.name}</h1>
      <p className="itemSubtitle">{props.character.species}</p>
    </li>
  );
};

export default Card;
