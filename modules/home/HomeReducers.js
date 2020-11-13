import _ from 'lodash';
import actions from '../../constants/actions';

const initialState = {
  isLoading: true,
  data: [],
  error: null,
};

export function userListReducers(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USER_LIST: {
      return {
        isLoading: true,
        data: [],
        error: null,
      };
    }
    case actions.GET_USER_LIST_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}
