import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { Button } from 'react-native-paper';

import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';

const Settings: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());
  const onHomePress = () => {
    NavigationService.navigate('Home');
  };
  const onNotificationsPress = () => {
    NavigationService.navigate('Notifications');
  };

  return (
    <>
      <View style={styles.appBar}>
        <TouchableHighlight underlayColor="none" onPress={onHomePress}>
          <Text style={styles.tabButton}>🏠</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="none" onPress={onNotificationsPress}>
          <Text style={styles.tabButton}>✉️</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="none">
          <Text style={styles.tabButton}>⚙️</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.container}>
        <Button icon="logout" mode="outlined" onPress={onLogout}>
          Logout
        </Button>
      </View>
    </>
  );
};

export default Settings;
