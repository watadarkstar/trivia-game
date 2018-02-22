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
    bottom: 20,
    right: 0,
    left: 0
  },
  card: {
    height: 400,
    padding: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  cardH1: {
    textAlign: 'center',
    padding: 10
  },
  cardText: {
    textAlign: 'center',
    paddingTop: 50
  },
});

export const htmlStyles = StyleSheet.create({
  h2: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10
  },
});
