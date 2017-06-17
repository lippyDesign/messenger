import { MESSAGE_TEXT } from '../actions/types';

const INITIAL_STATE = {
  messageText: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case MESSAGE_TEXT: return { ...state, messageText: action.payload }
    default: return state;
  }
}