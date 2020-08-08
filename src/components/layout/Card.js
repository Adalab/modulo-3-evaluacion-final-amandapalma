import React from "react";
import { Link } from "react-router-dom";
import "./_card.scss";

const Card = (props) => {
  return (
    <div clasnnName="cardContainer">
      <li className="card">
        <Link to={`/details/${props.character.id}`}>
          <img
            className="card__image"
            src={props.character.img}
            alt={props.character.name}
            title={`Picture of ${props.character.name}`}
          />
          <div className="card__description">
            <h1 className="card__description--title">{props.character.name}</h1>
            <h2
              className="
            card__cardDescription--subtitle"
            >
              {props.character.species}
            </h2>
          </div>
        </Link>
      </li>
    </div>
  );
};

export default Card;
