import { StyleSheet } from 'react-native';

export default StyleSheet.flatten({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { 
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 200,
    width: 200
  },
  loadingContainer: {
    marginTop: 30,
    flex: 1
  },
  h2: {
    textAlign: 'center',
    padding: 10
  },
  h3: {
    textAlign: 'center',
    padding: 10
  },
  text: {
    textAlign: 'center',
    padding: 10
  }
});
