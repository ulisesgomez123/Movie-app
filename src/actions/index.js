const apiKey= '3ef2dbda';

export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }
  
  export function getMovies(titulo) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }

  export function removeMovieFavorite(payload) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload };
  }
  
  export function getMovieDetail(idMovie) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${idMovie}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
        });
    };
  }