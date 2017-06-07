import { CREATE_USER_SUCCESS } from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case CREATE_USER_SUCCESS: return { user: action.payload };
    default: return state;
  }
}