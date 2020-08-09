import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import SearchNotFound from "../actions/SearchNotFound";
import "./_list.scss";

const List = (props) => {
  const characterItems = props.characters.map((character) => {
    return <Card key={character.id} character={character}></Card>;
  });
  if (characterItems.length === 0)
    return <SearchNotFound nameFilter={props.nameFilter} />;
  return <ul className="list">{characterItems}</ul>;
};

export default List;

List.propTypes = {
  characters: PropTypes.array,
  nameFilter: PropTypes.string,
};
