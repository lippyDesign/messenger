import { MESSAGE_TEXT } from './types';

export const onMessageTextChange = text => ({ type: MESSAGE_TEXT, payload: text });