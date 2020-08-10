import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FilterByName from "../actions/FilterByName";
import logo from "../../images/Rick_and_Morty_-_logo.png";
import "./_header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <Link to="/">
        <div className="logoContainer">
          <img
            className="logoContainer__logo"
            alt="Rick and Morty logo"
            src={logo}
          ></img>
        </div>
      </Link>
      <FilterByName
        className="filterInput"
        handleFilters={props.handleFilters}
      ></FilterByName>
    </header>
  );
};

export default Header;

Header.propTypes = {
  handleFilters: PropTypes.func,
};
