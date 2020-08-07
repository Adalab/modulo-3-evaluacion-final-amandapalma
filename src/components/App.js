import React, { useEffect, useState } from "react";
import Header from "./layout/Header";
import List from "./layout/List";
import DetailsCard from "./layout/DetailsCard";
import Footer from "./layout/Footer";
import getDataFromApi from "../services/getDataFromApi";

import { Route, Switch } from "react-router-dom";
// import reset from "../stylesheets/reset.scss";
import "./App.css";
// import routes from "../routes";

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

  // //reset search
  // const handleReset = (props) => {
  //   setCharacters([]);
  // };

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

  // console.log("personajes filtrados", filteredByNameCharacters);

  // content to paint

  // const contentToPaint = () => {
  //   if (filteredByNameCharacters === []) {
  //     return (
  //       <div>
  //         <p>character not founded</p>
  //       </div>
  //     );
  //   } else {
  //     return filteredByNameCharacters;
  //   }
  // };

  //Router
  const renderDetailsCard = (props) => {
    const clickedId = props.match.params.id;

    const foundedCharacter = characters.find((character) => {
      return character.id === parseInt(clickedId);
    });
    return <DetailsCard character={foundedCharacter} />;
  };

  return (
    <div className="App">
      <Header handleFilters={handleFilters} />
      <main>
        {/* <List characters={filteredByNameCharacters} /> */}
        <Switch>
          <Route exact path="/details/:id" render={renderDetailsCard} />
          {/* <Route
            exact
            path={routes.details(":id")}
            render={renderDetailsCard}
          /> */}
          {/* <Route
            exact
            path={routes.home()}
            render={() => <List characters={filteredByNameCharacters} />}
          /> */}
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
