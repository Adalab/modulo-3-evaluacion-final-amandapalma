import React from "react";
import Card from "./Card";
// import SearchNotFound from "../components/actions/SearchNotFound";
import "./list.scss";

const List = (props) => {
  const characterItems = props.characters.map((character) => {
    return <Card key={character.id} character={character}></Card>;
  });

  // function CharacterList(props) {
  //   // Search in the array all the characters that matches our input value
  //   const characterLis = props.characters.map((character) => {
  //     return <CharacterCard key={character.id} id={character.id} photo={character.photo} name={character.name} species={character.species} />;
  //   });

  //   // if there is no character matching our search show CharacterNotFound message
  //   if (characterLis.length === 0) return <CharacterNotFound nameFilter={props.nameFilter} />;
  //   return <ul className='character-list'>{characterLis}</ul>;
  // }

  // const contentToPaint = () => {
  //   if (foundedCharacter === []) {
  //     return (
  //       <div>
  //         <p>character not founded</p>
  //       </div>
  //     );
  //   } else {
  //     return foundedCharacter;
  //   }
  // };

  return (
    <div className="listContainer">
      <ul className="listContainer-list">
        {characterItems}
        {/* <Card>{characterItems}</Card> */}
      </ul>
    </div>
  );
};

export default List;
