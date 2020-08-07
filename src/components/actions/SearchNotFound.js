import React from "react";

function SearchNotFound(props) {
  return (
    <div className="character-detail">
      <main className="character-detail-card">
        <img className="error-image" src="" alt="Search not found"></img>
        <div>
          <h3 className="error-text">Sorry!</h3>
          <p className="error-text">
            There is no character that matches your search: {props.nameFilter}
          </p>
        </div>
      </main>
    </div>
  );
}

export default SearchNotFound;
