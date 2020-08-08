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
    <div className="formContainer">
      <form className="form" onSubmit={preventEvent}>
        <label className="form__label" htmlFor="searcherbyname">
          <h3>Type your character search!</h3>
        </label>
        <input
          className="form__input"
          id="searcherbyname"
          type="text"
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
};

export default FilterByName;
