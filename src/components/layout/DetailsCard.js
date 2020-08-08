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
      <div className="modal">
        <div className="modal__dialog">
          <div className="modal__content">
            <header className="modal__header">
              <h2 className="modal__title">
                The character you're looking for doesn't exist!!
              </h2>
              <Link to="/">
                <span className="modal__icon ">
                  <FontAwesomeIcon icon={faTimesCircle} />
                </span>
              </Link>
            </header>
            <section>
              <img className="modal__notFoundImg" src="" alt="" title=""></img>
            </section>
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
                <span className="modal__icon">
                  <FontAwesomeIcon icon={faTimesCircle} />
                </span>
              </Link>
            </header>
            <section>
              <h2 className="modal__title">{props.character.name}</h2>
              <img
                className="DetailsCard__img"
                src={props.character.img}
                alt={props.character.name}
              />
              <ul className="DetailsCard__details">
                <li>Name: {props.character.name}</li>
                <li>
                  Species:&nbsp;&nbsp;
                  {props.character.species === "Alien" ? (
                    <FontAwesomeIcon icon={faPastafarianism} />
                  ) : (
                    <FontAwesomeIcon icon={faUser} />
                  )}
                </li>
                <li>Planet: {props.character.planet}</li>
                <li>Episodes: {props.character.episodes}</li>
                <li>Status:&nbsp;&nbsp;{getIconStatus(props)}</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  }
};

export default DetailsCard;
