import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

const Card = (props) => {
  return (
    <li className="Detailscard">
      <Link to={`/details/${props.character.id}`}>
        <img
          className="Detailscard__img"
          src={props.character.img}
          alt={props.character.name}
          title={`Picture of ${props.character.name}`}
        />
        <h1 className="Detailscard__title">{props.character.name}</h1>
        <p className="Detailscard__subtitle1">{props.character.species}</p>
      </Link>
    </li>
  );
};

export default Card;
