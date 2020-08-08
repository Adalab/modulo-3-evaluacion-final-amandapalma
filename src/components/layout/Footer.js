import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCat, faCopyright } from "@fortawesome/free-solid-svg-icons";
import "./_footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <span>
          Powered with blood, sweat and &nbsp;
          <FontAwesomeIcon icon={faHeart} />
        </span>
        <br></br>
        <span>
          &nbsp;By Amanda
          <FontAwesomeIcon icon={faCat} />
          Palma - <FontAwesomeIcon icon={faCopyright} />
          &nbsp;2020
        </span>
      </div>
    </footer>
  );
};

export default Footer;
