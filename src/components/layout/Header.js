import React from "react";
import logo from "../../images/Rick_and_Morty_-_logo.png";
import FilterByName from "../actions/FilterByName";
import "./header.scss";

const Header = (props) => {
  return (
    <header>
      <div className="logoContainer">
        <img
          className="logoContainer-logo"
          alt="Rick and Morty logo"
          src={logo}
        ></img>
      </div>
      <FilterByName handleFilters={props.handleFilters}></FilterByName>
    </header>
  );
};

export default Header;
