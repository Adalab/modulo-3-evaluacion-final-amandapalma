import React, { useEffect, useState } from "react";
import Header from "./layout/Header";
import List from "./layout/List";
import DetailsCard from "./layout/DetailsCard";
import Footer from "./layout/Footer";
import getDataFromApi from "../services/getDataFromApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import "./_app.scss";

function App() {
  //states
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  // prevent promise update
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  //events handlers
  const handleFilters = (filterData) => {
    setNameFilter(filterData.value);
  };

  // filters
  const filteredByNameCharacters = characters.filter((characters) => {
    return characters.name.toUpperCase().includes(nameFilter.toUpperCase());
  });

  //Router
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
          <Route
            path="*"
            render={() => (
              <div>
                <Link to="/">
                  <FontAwesomeIcon icon={faTimesCircle} />
                </Link>
                <h1>Route not found</h1>
              </div>
            )}
          />
        </Switch>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
