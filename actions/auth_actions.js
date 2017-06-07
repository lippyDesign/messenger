import { AsyncStorage } from 'react-native';
import firebase from 'firebase';
import { CREATE_USER_SUCCESS, CREATE_USER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from './types';

export const createUser = ({ email, password }) => async dispatch => {
  let user = await firebase.auth().createUserWithEmailAndPassword(email, password);
  console.log(user)
  dispatch({ type: CREATE_USER_SUCCESS, payload: user })
}

// // the doFacebookLogin function will handle obtaining token from facebook and saving it to AsyncStorage
// const doFacebookLogin = async dispatch => {
//   // attempt to log in with permissions;
//   // first argument is the app id (from facebook dev page), the second argument is the permissions we want to have from facebook
//   let { type, token } = await Facebook.logInWithReadPermissionsAsync('1904977846456198', { permissions: ['public_profile'] });
//   // if user did not authorize or facebook log in failed, return early and disptach FACEBOOK_LOGIN_FAIL
//   if (type === 'cencel') return dispatch({ type: FACEBOOK_LOGIN_FAIL });
//   // if we recieved token (facebook login successful), save the token in devices local storage
//   await AsyncStorage.setItem('fb_token', token);
//   // and disptach FACEBOOK_LOGIN_SUCCESS
//   dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
// };