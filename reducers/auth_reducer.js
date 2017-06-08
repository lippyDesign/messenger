import { CREATE_OR_SIGNIN_USER_SUCCESS, CREATE_OR_SIGNIN_USER_FAIL, LOADING } from '../actions/types';

const INITIAL_STATE = {
  user: null,
  errorMessage: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CREATE_OR_SIGNIN_USER_SUCCESS: return { ...state, user: action.payload, loading: false, errorMessage: '' };
    case CREATE_OR_SIGNIN_USER_FAIL: return { ...state, errorMessage: action.payload.message, loading: false };
    case LOADING: return { ...state, loading: true };
    default: return state;
  }
}