import React from "react";
import logo from "../../images/Rick_and_Morty_-_logo.png";
import FilterByName from "../actions/FilterByName";
import { Link } from "react-router-dom";
// import "./_header.scss";

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
