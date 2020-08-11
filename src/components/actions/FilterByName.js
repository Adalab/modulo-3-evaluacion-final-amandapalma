import React from "react";
import "./_filterByName.scss";

const FilterByName = (props) => {
  //Prevent default form submit
  const preventEvent = (event) => {
    event.preventDefault(event);
  };
  //Lifting to send value data to main component App.js when event is executed. Function handleFilters was previously declared in App.js.
  const handleChange = (ev) => {
    props.handleFilters({ value: ev.target.value, key: "name" });
  };
  return (
    <div className="formContainer">
      {/* //Listen event (onSubmit) to run preventEvent */}
      <form className="form" onSubmit={preventEvent}>
        <label className="form__label" htmlFor="searcherbyname">
          <h2>Type your character search!</h2>
        </label>
        <input
          className="form__input"
          id="searcherbyname"
          type="text"
          placeholder="ex. Rick Sanchez"
          //Listen event (onChange) to run handleChange
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
};

export default FilterByName;
