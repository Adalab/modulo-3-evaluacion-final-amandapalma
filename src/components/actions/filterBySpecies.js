import React from "react";
import "./_filterByName.scss";

const FilterBySpecies = (props) => {
  const preventEvent = (event) => {
    event.preventDefault(event);
  };

  const handleChange = (ev) => {
    props.handleFilters({ value: ev.target.value, key: "species" });
  };
  return (
    <div className="formContainer">
      <form className="form" onSubmit={preventEvent}>
        <label htmlFor="species">
          <h2>What species?</h2>
        </label>
        <select id="species" name="species" onChange={handleChange}>
          <option value="all">all</option>
          <option value="human">human</option>
          <option value="alien">alien</option>
        </select>
      </form>
    </div>
  );
};

export default FilterBySpecies;
