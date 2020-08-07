import React, { useEffect, useState } from "react";
// import React from "react";
import Header from "./layout/Header";
import List from "./layout/List";
import DetailsCard from "./layout/DetailsCard";
import Footer from "./layout/Footer";
import getDataFromApi from "../services/getDataFromApi";
// import reset from "../stylesheets/reset.scss";
import "./App.css";

function App() {
  //states
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  // const [fooFilter, setFooFilter] = useState("");

  // prevent promise update
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  //events handlers
  const handleFilters = (filterData) => {
    setNameFilter(filterData.value);

    // Si tengo varios filtros:
    // if (filterData.key === "name") {
    //   setNameFilter(filterData.value);
    // } else if (filterData.key === "foo") {
    //   setFooFilter(filterData.value);
    // }
  };

  // filters
  const filteredByNameCharacters = characters.filter((characters) => {
    return characters.name.toUpperCase().includes(nameFilter.toUpperCase());
  });

  //sort by alphabetical order
  // characters.sort((a, b) => {
  //   if (a.name < b.name) {
  //     return -1;
  //   } else if (a.name > b.name) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // });

  //other option
  characters.sort();
  characters.reverse();

  console.log(characters);

  return (
    <div className="App">
      <Header handleFilters={handleFilters}></Header>
      <main>
        <List characters={filteredByNameCharacters}></List>

        <DetailsCard></DetailsCard>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
