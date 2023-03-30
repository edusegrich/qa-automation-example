/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import { Alert } from 'react-native';
// import loginUser from 'app/services/loginUser';
import * as loginActions from 'app/store/actions/loginActions';
import { loginReducer } from '../reducers/loginReducer';
import configureStore from '..';

// Our worker Saga that logins the user
export default function* loginAsync() {
	yield put(loginActions.enableLoader());

	//how to call api
	//const response = yield call(loginUser, action.username, action.password);
	//mock response
	const { store } = configureStore();
	let response: any;
	const { username, password } = store.getState().loginReducer;
	if (username === 'user' && password === '1234') response = { success: true, data: { id: 1 }, message: 'Success' };
	else response = { data: { id: 1 }, message: 'Error en Login' };

	if (response.success) {
		yield put(loginActions.onLoginResponse(response.data));
		yield put(loginActions.disableLoader());

		// no need to call navigate as this is handled by redux store with SwitchNavigator
		//yield call(navigationActions.navigateToHome);
	} else {
		yield put(loginActions.loginFailed());
		yield put(loginActions.disableLoader());
		setTimeout(() => {
			Alert.alert('BoilerPlate', response.message);
		}, 200);
	}
}
