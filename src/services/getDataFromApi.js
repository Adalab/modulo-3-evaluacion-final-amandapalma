const getDataFromApi = () => {
  return fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((item) => {
        return {
          id: item.id,
          name: item.name,
          species: item.species,
          img: item.image,
          status: item.status,
          planet: item.origin.name,
          episodes: item.episode.length,
        };
      });
    });
};
export default getDataFromApi;

// getDataFromApi() {
//     // hacemos la llamada al servidor
//     fetch('https://api.rand.fun/number/integer')
//       .then(response => response.json())
//       .then(responseData => {
//         // y cuando responde el servidor guardamos los datos en el estado
//         this.setState({ data: responseData });
//       });
//   }
