import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notification: {
    borderWidth: 0.2,
    borderRadius: 10,
    margin: 10,
    padding: 20,
    backgroundColor: '#f1f1f1',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: {
      width: 5,
      height: 2,
    },
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
  },
  content: {
    marginTop: 10,
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
