import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCopyright } from "@fortawesome/free-solid-svg-icons";
import "./_footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copy">
        Powered with blood, sweat and{" "}
        <span className="footer__copy--icon">
          <FontAwesomeIcon icon={faHeart} />
        </span>{" "}
        <span className="footer__copy--text">By</span>
        <a className="footer__copy--link" href="mailto:amandapalma00@gmail.com">
          {" "}
          Amanda Palma
        </a>
        .<br></br>
        <span className="footer__copy--icon">
          <FontAwesomeIcon icon={faCopyright} />
          <FontAwesomeIcon icon={faCopyright} />
        </span>{" "}
        2020
      </div>
    </footer>
  );
};

export default Footer;
