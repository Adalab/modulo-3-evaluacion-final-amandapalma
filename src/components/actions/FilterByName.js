import React from "react";
import "./filterByName.scss";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilters({ value: ev.target.value, key: "name" });
  };
  return (
    <form className="form">
      <label className="form-label" htmlFor="searcherbyname">
        Search your character
      </label>
      <input
        className="form-input"
        id="searcherbyname"
        type="text"
        // value=""
        onChange={handleChange}
      ></input>
    </form>
  );
};

export default FilterByName;
