export const getListsStart = () => ({
  type: "GET_LISTS_START",
});

export const getListsSuccess = (lists) => ({
  type: "GET_LISTS_SUCCESS",
  payload: lists,
});

export const getListsFailure = () => ({
  type: "GET_LISTS_FAILURE",
});

//create
export const CreateListStart = () => ({
  type: "CREATE_LIST_START",
});

export const CreateListSuccess = (list) => ({
  type: "CREATE_LIST_SUCCESS",
  payload: list,
});

export const CreateListFailure = () => ({
  type: "CREATE_LIST_FAILURE",
});

//   //update
//   export const updateMovieStart = () => ({
//     type: "UPDATE_MOVIE_START",
//   });

//   export const updateMovieSuccess = (movie) => ({
//     type: "UPDATE_MOVIE_SUCCESS",
//     payload: movie,
//   });

//   export const updateMovieFailure = () => ({
//     type: "UPDATE_MOVIE_FAILURE",
//   });

export const updateListStart = () => ({
  type: "UPDATE_LIST_START",
});

export const updateListSuccess = (list) => ({
  type: "UPDATE_LIST_SUCCESS",
  payload: list,
});

export const updateListFailure = () => ({
  type: "UPDATE_LIST_FAILURE",
});

//delete
export const deleteListStart = () => ({
  type: "DELETE_LIST_START",
});

export const deleteListSuccess = (id) => ({
  type: "DELETE_LIST_SUCCESS",
  payload: id,
});

export const deleteListFailure = () => ({
  type: "DELETE_LIST_FAILURE",
});