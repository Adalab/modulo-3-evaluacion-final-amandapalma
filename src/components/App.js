import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import getDataFromApi from "../services/getDataFromApi";
import Header from "./layout/Header";
import List from "./layout/List";
import DetailsCard from "./layout/DetailsCard";
import Footer from "./layout/Footer";
import RouteNotFound from "./actions/RouteNotFound";
import "./_app.scss";

function App() {
  // States
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  //
  const [speciesFilter, setSpeciesFilter] = useState("all");

  // Prevent promise update
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  // Event handlers
  const handleFilters = (filterData) => {
    if (filterData.key === "name") {
      setNameFilter(filterData.value);
    } else if (filterData.key === "species") {
      setSpeciesFilter(filterData.value);
    }

    // console.log("name", nameFilter);
    // console.log("species", speciesFilter);
  };

  //Reset

  const handleReset = () => {
    return setNameFilter("");
  };

  // Filters

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((character) => {
      // if (speciesFilter === "all") {
      //   return true;
      // } else {
      //   return character.species === speciesFilter;
      // }
      return speciesFilter === "all"
        ? true
        : character.species === speciesFilter;
    });

  // Router
  const renderDetailsCard = (props) => {
    const clickedId = props.match.params.id;

    const foundedCharacter = characters.find((character) => {
      return character.id === parseInt(clickedId);
    });
    return <DetailsCard character={foundedCharacter} />;
  };

  return (
    <div className="appContainer">
      <Header className="header" handleFilters={handleFilters} />
      <main className="main">
        <Switch>
          <Route exact path="/details/:id" render={renderDetailsCard} />
          <Route
            exact
            path="/"
            render={() => (
              <List
                characters={filteredCharacters}
                nameFilter={nameFilter}
                handleReset={handleReset}
              />
            )}
          />
          <Route path="*" render={() => <RouteNotFound />} />
        </Switch>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
