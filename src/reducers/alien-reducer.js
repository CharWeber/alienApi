import * as c from './../actions/ActionTypes'

const defaultState = {
  isLoading: false,
  aliens: [],
  error: null
}

export default (state = defaultState, action) => {
  const { type, aliens, error } = action
  switch (type) {
    case c.REQUEST_ALIEN_LIST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case c.GET_ALIEN_LIST_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        aliens
      })
    case c.GET_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error
      })
      default:
      return state;
  }
};
