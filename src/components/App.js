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

  // Prevent promise update
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  // Event handlers
  const handleFilters = (filterData) => {
    setNameFilter(filterData.value);
  };

  // Filters
  const filteredByNameCharacters = characters.filter((characters) => {
    return characters.name.toUpperCase().includes(nameFilter.toUpperCase());
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
                characters={filteredByNameCharacters}
                nameFilter={nameFilter}
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
