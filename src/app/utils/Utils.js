const GetGenreNames = (allGenres, movieGenres, spliter) => {
  let movieGenreNames = [];
  allGenres.find((el, index) => {
    if (movieGenres.includes(el.id)) {
      movieGenreNames.push(el.name);
    }
  });

  return movieGenreNames.length > 0 ? movieGenreNames.join(spliter) : "";
};

export default GetGenreNames;