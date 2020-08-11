import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./_card.scss";

//Card recibe de su madre los datos de character a traves de las props y así se pintan las tarjetas con los datos personalizados
const Card = (props) => {
  return (
    <div className="cardContainer">
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
            <h3
              className="
            card__description--subtitle"
            >
              {props.character.species}
            </h3>
          </div>
        </Link>
      </li>
    </div>
  );
};

export default Card;

Card.ropTypes = {
  character: PropTypes.object,
};
