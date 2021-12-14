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
  console.log("calling list")
  return dispatch => {
    dispatch(requestAlienList);
    return fetch("https://localhost:5001/api/Aliens")
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getAlienListSuccess(jsonifiedResponse));
        })
      .catch((error) => {
        dispatch(getFailure(error));
      });
  }
}

export const alienListPost = (newAlien) => {
  const stringifiedAlien = JSON.stringify(newAlien);
  return dispatch => {
    dispatch(requestAlienList);
    return fetch("https://localhost:5001/api/Aliens",
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: stringifiedAlien
    })
    // .then(response => response.json())
    .then(
      (response) => {
        if (response) {
        dispatch(alienListCall());
        }
      })
    .catch((error) => {
      dispatch(getFailure(error));
    })
  }
}

export const alienListDelete = (id) => {
  return dispatch => {
    dispatch(requestAlienList);
    return fetch(`https://localhost:5001/api/Aliens/${id}`,
    {
      method: 'DELETE',
      headers: { 'accept': '*/*' }
    })
      // .then(response => response.json())
      .then(
        (response) => {
          if (response) {
            dispatch(alienListCall());
            }
        })
      .catch((error) => {
        dispatch(getFailure(error));
      });
  }
}

