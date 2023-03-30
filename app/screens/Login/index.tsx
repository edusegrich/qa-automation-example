import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';

interface IState {
	loginReducer: ILoginState;
}

const Login: React.FC = () => {
	const id = useSelector((state: IState) => state.loginReducer.id);
	const dispatch = useDispatch();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const onChangeUsername = (text: string) => {
		setUsername(text);
	};
	const onChangePassword = (text: string) => {
		setPassword(text);
	};
	const onLogin = () => dispatch(loginActions.requestLogin(username, password));
	const onForgot = () => NavigationService.navigate('ForgotPassword');
	return (
		<View style={styles.container}>
			<View style={styles.container}>
				<Text style={styles.login}>Login Status : {id}</Text>
				<View style={{ margin: 20, marginBottom: 100 }}>
					<TextInput style={styles.textInput} placeholder="username" onChangeText={onChangeUsername}/>
					<TextInput
						style={styles.textInput}
						placeholder="****"
						secureTextEntry
						onChangeText={onChangePassword}
					/>
				</View>
				<Button icon="login" mode="outlined" onPress={onLogin}>
					Login
				</Button>
				<Button
					mode="text"
					style={styles.forgot}
					labelStyle={styles.labelStyle}
					onPress={onForgot}>
					Forgot Password
				</Button>
			</View>
		</View>
	);
};

export default Login;
