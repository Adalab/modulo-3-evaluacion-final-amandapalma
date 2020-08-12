import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import summerTyping from "../../images/typing-summer.gif";
import "./_searchNotFound.scss";

function SearchNotFound(props) {
  return (
    <div className="modalNotFound">
      <div className="modalNotFound__dialog">
        <div className="modalNotFound__content">
          <Link to="/">
            <span className="modalNotFound__icon">
              <FontAwesomeIcon
                icon={faTimesCircle}
                onClick={props.handleReset}
              />
            </span>
          </Link>
          <div className="modalNotFound__bubble triangle2">
            <h1 className="modalNotFound__bubble--title">
              There is no character that matches your search:{" "}
            </h1>
            <h3 className="modalNotFound__bubble--matchTitle">
              >{props.nameFilter}
            </h3>
          </div>
          <div className="modalNotFound__imageContainer">
            <img
              className="modalNotFound__imageContainer--image"
              src={summerTyping}
              alt="Summer gif"
              title="Summer gif"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchNotFound;
