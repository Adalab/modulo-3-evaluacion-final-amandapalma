import React from "react";
import "./filterByName.scss";

const FilterByName = (props) => {
  const preventEvent = (event) => {
    event.preventDefault(event);
  };
  const handleChange = (ev) => {
    props.handleFilters({ value: ev.target.value, key: "name" });
  };
  return (
    <form className="form" onSubmit={preventEvent}>
      <label className="form-label" htmlFor="searcherbyname">
        Search your character
      </label>
      <input
        className="form-input"
        id="searcherbyname"
        type="text"
        onChange={handleChange}
      ></input>
    </form>
  );
};

export default FilterByName;
