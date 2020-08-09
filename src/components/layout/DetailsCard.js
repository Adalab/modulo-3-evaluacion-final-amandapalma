import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faSkullCrossbones,
  faHeartbeat,
  faUser,
  faPastafarianism,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import mortyHelmet from "../../images/helmet-morty.gif";
// import blackSpace from "../../images/black-space.gif";
import "./_detailsCard.scss";

const DetailsCard = (props) => {
  const getIconStatus = (props) => {
    if (props.character.status === "Dead")
      return <FontAwesomeIcon icon={faSkullCrossbones} />;
    else if (props.character.status === "Alive")
      return <FontAwesomeIcon icon={faHeartbeat} />;
    else {
      return <FontAwesomeIcon icon={faQuestion} />;
    }
  };
  if (props.character === undefined) {
    return (
      <div className="modalNotExist">
        <div className="modalNotExist__dialog">
          <div className="modalNotExist__content">
            <Link to="/">
              <span className="modalNotExist__icon">
                <FontAwesomeIcon icon={faTimesCircle} />
              </span>
            </Link>
            <div className="modalNotExist__bubble triangle">
              <h1 className="modalNotExist__bubble--title">
                The character you're looking for doesn't exist!!
              </h1>
            </div>
            <div className="modalNotExist__imageContainer">
              <img
                className="modalNotExist__imageContainer--image"
                src={mortyHelmet}
                alt="Morty gif"
                title="Morty gif"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="modal">
        <div className="modal__dialog">
          <div className="modal__content">
            <header className="modal__header">
              <Link to="/">
                <span className="modal__header--icon">
                  <FontAwesomeIcon icon={faTimesCircle} />
                </span>
              </Link>
            </header>
            <section>
              <h1 className="modal__title">{props.character.name}</h1>
              <img
                className="modal__image"
                src={props.character.img}
                alt={props.character.name}
              />
              <ul className="modal__details">
                <li className="modal__details--detailsbox">
                  <h3 className="modal__details--detailsbox-title">Species:</h3>
                  &nbsp;&nbsp;
                  <span className="modal__details--detailsbox-description">
                    {props.character.species === "Alien" ? (
                      <FontAwesomeIcon icon={faPastafarianism} />
                    ) : (
                      <FontAwesomeIcon icon={faUser} />
                    )}
                  </span>
                </li>
                <li className="modal__details--detailsbox">
                  <h3 className="modal__details--detailsbox-title">Planet: </h3>
                  &nbsp;&nbsp;
                  <p className="modal__details--detailsbox-description">
                    {props.character.planet}
                  </p>
                </li>
                <li className="modal__details--detailsbox">
                  <h3 className="modal__details--detailsbox-title">
                    Episodes:{" "}
                  </h3>
                  &nbsp;&nbsp;
                  <p className="modal__details--detailsbox-description">
                    {props.character.episodes}
                  </p>
                </li>
                <li className="modal__details--detailsbox">
                  <h3 className="modal__details--detailsbox-title">Status:</h3>
                  &nbsp;&nbsp;
                  <p className="modal__details--detailsbox-description">
                    {getIconStatus(props)}
                  </p>
                </li>
              </ul>
            </section>
            <footer className="modal__footer"></footer>
          </div>
        </div>
      </div>
    );
  }
};

export default DetailsCard;
