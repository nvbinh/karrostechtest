export function config(state = [], action) {
  switch (action.type) {
    case "GET_CONFIG":
      return {
        ...state,
        images: action.config.images
      };
    default:
      return state;
  }
}

export function movies(state = [], action) {
  switch (action.type) {
    case "GET_LATEST_MOVIES":
      return {
        ...state,
        latest: action.movies
      };
    default:
      return state;
  }
}

export function genres(state = [], action) {
  switch (action.type) {
    case "GET_GENRES":
      return [...action.genres];
    default:
      return state;
  }
}