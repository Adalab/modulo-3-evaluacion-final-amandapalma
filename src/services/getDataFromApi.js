const getDatafromApi = () => {
  return fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((data) => {
      const items = data.results.map((item) => {
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

      //sort alphabetically
      items.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      //other option to sort alphabetically
      // items.sort();
      // items.reverse();

      return items;
    });
};

export default getDatafromApi;
