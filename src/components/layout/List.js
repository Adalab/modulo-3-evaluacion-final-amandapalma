import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import SearchNotFound from "../actions/SearchNotFound";
import "./_list.scss";

// List.js recibe los datos de su madre a través de las props y a su vez los pasa a su hijo Card.js
const List = (props) => {
  const characterItems = props.characters.map((character) => {
    return <Card key={character.id} character={character}></Card>;
  });
  // console.log(characterItems);
  // if (characterItems === []) ¿Por qué no podría ser igual a un array vacío?
  if (characterItems.length === 0)
    return <SearchNotFound nameFilter={props.nameFilter} />;
  else {
    return <ul className="list">{characterItems}</ul>;
  }
};

export default List;

List.propTypes = {
  characters: PropTypes.array,
  nameFilter: PropTypes.string,
};
