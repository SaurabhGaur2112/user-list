import actions from '../../constants/actions';
import apiEndPoints from '../../helpers/apiEndPoints';

export const getUserLists = (value) => ({
  types: [actions.GET_USER_LIST, actions.GET_USER_LIST_SUCCESS, actions.GET_USER_LIST_FAILURE],
  promise: (client) => client.get(apiEndPoints.home.getUserLists(), { params: value }),
});
