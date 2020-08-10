import React from "react";

import "./_filterByName.scss";

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
          <h2>Type your character search!</h2>
        </label>
        <input
          className="form__input"
          id="searcherbyname"
          type="text"
          placeholder="ex. Rick Sanchez"
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
};

export default FilterByName;
