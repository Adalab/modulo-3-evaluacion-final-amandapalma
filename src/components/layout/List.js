import React from "react";
import Card from "./Card";
import SearchNotFound from "../actions/SearchNotFound";
import "./list.scss";

// const List = (props) => {
//   const characterItems = props.characters.map((character) => {
//     return <Card key={character.id} character={character}></Card>;
//   });

//   return (
//     <div className="listContainer">
//       <ul className="listContainer-list">
//         {characterItems}
//         {/* <Card>{characterItems}</Card> */}
//       </ul>
//     </div>
//   );
// };

const List = (props) => {
  const characterItems = props.characters.map((character) => {
    return <Card key={character.id} character={character}></Card>;
  });

  // if there is no character matching our search show SearchNotFound message
  if (characterItems.length === 0)
    return <SearchNotFound nameFilter={props.nameFilter} />;
  return <ul className="character-list">{characterItems}</ul>;
};

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

export default List;
