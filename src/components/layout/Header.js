import React from "react";
import logo from "../../images/Rick_and_Morty_-_logo.png";

import FilterByName from "../actions/FilterByName";
import ResetSearch from "../actions/ResetSearch";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = (props) => {
  return (
    <header>
      <Link to="/">
        <div className="logoContainer">
          <img
            className="logoContainer-logo"
            alt="Rick and Morty logo"
            src={logo}
          ></img>
        </div>
        <ResetSearch></ResetSearch>
      </Link>
      <FilterByName handleFilters={props.handleFilters}></FilterByName>
    </header>
  );
};

export default Header;
