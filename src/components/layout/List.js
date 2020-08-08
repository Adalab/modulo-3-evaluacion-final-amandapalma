import React from "react";
import Card from "./Card";
import SearchNotFound from "../actions/SearchNotFound";
import "./list.scss";

const List = (props) => {
  const characterItems = props.characters.map((character) => {
    return <Card key={character.id} character={character}></Card>;
  });
  if (characterItems.length === 0)
    return <SearchNotFound nameFilter={props.nameFilter} />;
  return <ul className="character-list">{characterItems}</ul>;
};

export default List;
