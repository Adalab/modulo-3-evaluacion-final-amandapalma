import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCat } from "@fortawesome/free-solid-svg-icons";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <span className="copy">
        powered with blood, sweat and <FontAwesomeIcon icon={faHeart} />
        by Amanda
        <FontAwesomeIcon icon={faCat} />
        Palma - 2020
      </span>
    </footer>
  );
};

export default Footer;
