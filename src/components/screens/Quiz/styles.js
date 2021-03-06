import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: { 
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    padding: 15,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  },
  emptyText: {
    textAlign: 'center'
  }
});
