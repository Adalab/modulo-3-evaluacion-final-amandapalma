import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import jerry from "../../images/fall-jerry.gif";
import "./_routeNotFound.scss";

function RouteNotFound(props) {
  return (
    <div className="modalNotFoundRoute">
      <div className="modalNotFoundRoute__dialog">
        <div className="modalNotFoundRoute__content">
          <Link to="/">
            <span className="modalNotFoundRoute__icon">
              <FontAwesomeIcon icon={faTimesCircle} />
            </span>
          </Link>
          <div className="modalNotFoundRoute__bubble triangle2">
            <h1 className="modalNotFoundRoute__bubble--title">
              Route not fooooooound!!!!!!
            </h1>
          </div>
          <div className="modalNotFoundRoute__imageContainer">
            <img
              className="modalNotFoundRoute__imageContainer--image"
              src={jerry}
              alt="Jerry gif"
              title="Jerry gif"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RouteNotFound;
