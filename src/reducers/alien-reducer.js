import * as c from './../actions/ActionTypes'

const defaultState = {
  isLoaded: false,
  aliens: [],
  error: null,
  selectedAlien: null,
  editing: false
}

export default (state = defaultState, action) => {
  const { type, aliens, error } = action
  switch (type) {
    case c.REQUEST_ALIEN_LIST:
      return Object.assign({}, state, {
        isLoaded: false,
      });
    case c.GET_ALIEN_LIST_SUCCESS:
      return Object.assign({}, state, {
        isLoaded: true,
        aliens: aliens,
        // selectedAlien: null,
        // editing: false

      })
    case c.GET_FAILURE:
      return Object.assign({}, state, {
        isLoaded: true,
        error: error,
        // selectedAlien: null,
        // editing: false
      })
    // case c.CREATE_NEW_ALIEN:
    //   return Object.assign({}, state, {
    //     isLoaded: true,
    //     aliens: 
    //   })
      default:
      return state;
  }
};
