import React from 'react';
import { View, TouchableHighlight, Text, ScrollView } from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc consequat. Sit amet luctus venenatis lectus magna. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida.';

const Notifications: React.FC = () => {
  const onHomePress = () => {
    NavigationService.navigate('Home');
  };
  const onSettingsPress = () => {
    NavigationService.navigate('Settings');
  };

  const dummyNotifications = [
    { title: 'A', content: lorem, status: 'No leido' },
    { title: 'B', content: lorem, status: 'No leido' },
    { title: 'C', content: lorem, status: 'No leido' },
    { title: 'D', content: lorem, status: 'No leido' },
    { title: 'E', content: lorem, status: 'No leido' },
    { title: 'F', content: lorem, status: 'No leido' },
    { title: 'G', content: lorem, status: 'No leido' },
  ];
  const notifications = dummyNotifications.map(notification => (
    <View style={styles.notification}>
      <Text style={styles.title}>{notification.title}</Text>
      <Text>{notification.status}</Text>
      <Text style={styles.content}>{notification.content}</Text>
    </View>
  ));

  return (
    <>
      <View style={styles.appBar}>
        <TouchableHighlight underlayColor="none" onPress={onHomePress}>
          <Text style={styles.tabButton}>🏠</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="none">
          <Text style={styles.tabButton}>✉️</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="none" onPress={onSettingsPress}>
          <Text style={styles.tabButton}>⚙️</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.container}>
        <Text>Notifications</Text>
      </View>
      <ScrollView>{notifications}</ScrollView>
    </>
  );
};

export default Notifications;
