import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { Button } from 'react-native-paper';

import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';

const Home: React.FC = () => {
  const onNotificationsPress = () => {
    NavigationService.navigate('Notifications');
  };
  const onSettingsPress = () => {
    NavigationService.navigate('Settings');
  };

  return (
    <>
      <View style={styles.appBar}>
        <TouchableHighlight underlayColor="none">
          <Text style={styles.tabButton}>🏠</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="none" onPress={onNotificationsPress}>
          <Text style={styles.tabButton}>✉️</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="none" onPress={onSettingsPress}>
          <Text style={styles.tabButton}>⚙️</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </>
  );
};

export default Home;
