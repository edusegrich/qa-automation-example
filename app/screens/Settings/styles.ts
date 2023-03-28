import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 60,
  },
  tabButton: {
    fontSize: 30,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});

export default styles;
