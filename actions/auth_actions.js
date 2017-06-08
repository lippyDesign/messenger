import { AsyncStorage } from 'react-native';
import firebase from 'firebase';
import { CREATE_OR_SIGNIN_USER_SUCCESS, CREATE_OR_SIGNIN_USER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOADING } from './types';

export const createUser = ({ email, password }) => async dispatch => {
  dispatch({ type: LOADING });
  try {
    let user = await firebase.auth().createUserWithEmailAndPassword(email, password);
    onUserSuccess(dispatch, user, navigation);
  } catch (error) {
    dispatch({ type: CREATE_OR_SIGNIN_USER_FAIL, payload: error });
  }
};

export const signInUser = ({ email, password, navigation }) => async dispatch => {
  dispatch({ type: LOADING });
  try {
    let user = await firebase.auth().signInWithEmailAndPassword(email, password);
    onUserSuccess(dispatch, user, navigation);
  } catch (error) {
    dispatch({ type: CREATE_OR_SIGNIN_USER_FAIL, payload: error });
  }
};

const onUserSuccess = (dispatch, user, navigation) => {
  dispatch({ type: CREATE_OR_SIGNIN_USER_SUCCESS, payload: user });
  // navigate user into main portion
  navigation.navigate('main');
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