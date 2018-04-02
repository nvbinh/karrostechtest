import apiConnect from "../services/ApiConnect";

export function getConfig() {
	return async (dispatch, getState) => {
		const response = await apiConnect.getConfig();
		dispatch({
			type: "GET_CONFIG",
			config: response
		});
	};
}

export function getLatestMovies() {
	return async (dispatch, getState) => {
		const response = await apiConnect.getLatestMovies();
		dispatch({
			type: "GET_LATEST_MOVIES",
			movies: response.results
		});
	};
}

export function getGenres() {
  return async (dispatch, getState) => {
    const response = await apiConnect.getGenres();
    dispatch({
      type: "GET_GENRES",
      genres: response
    });
  };
}