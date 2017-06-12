import { USERNAME_TEXT_CHANGE, CHECKING_USERNAME, USERNAME_TEST_RESULT, CREATE_OR_SIGNIN_USER_SUCCESS, CREATE_OR_SIGNIN_USER_FAIL, LOADING } from '../actions/types';

const INITIAL_STATE = {
  usernameText: '',
  checkingUsername: false,
  usernameError: '',
  user: null,
  errorMessage: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case USERNAME_TEXT_CHANGE: return { ...state, usernameText: action.payload };
    case CHECKING_USERNAME: return { ...state, checkingUsername: action.payload };
    case USERNAME_TEST_RESULT: return { ...state, checkingUsername: false, usernameError: action.payload === 'Available' ? '' : 'Username is not available' };
    case CREATE_OR_SIGNIN_USER_SUCCESS: return { ...state, user: action.payload, loading: false, errorMessage: '' };
    case CREATE_OR_SIGNIN_USER_FAIL: return { ...state, errorMessage: action.payload.message, loading: false };
    case LOADING: return { ...state, loading: true };
    default: return state;
  }
}