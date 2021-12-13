import * as c from "./ActionTypes";

export const requestAlienList = () => ({
  type: c.REQUEST_ALIEN_LIST
});

export const getAlienListSuccess = (aliens) => ({
  type: c.GET_ALIEN_LIST_SUCCESS,
  aliens
})

export const getFailure = (error) => ({
  type: c.GET_FAILURE,
  error
})

export const alienListCall = () => {
  return dispatch => {
    dispatch(requestAlienList);
    return fetch("https://localhost:5001/api/Aliens")
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getAlienListSuccess(jsonifiedResponse.results));
        })
      .catch((error) => {
        dispatch(getFailure(error));
      });
  }
}