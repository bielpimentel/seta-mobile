import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fcfff7',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    fontFamily: 'Kanit_500Medium',
    fontSize: 48,
    letterSpacing: 4,
    color: '#008937',
    marginBottom: 30,
  },
  subtitle: {
    fontFamily: 'Kanit_500Medium',
    fontSize: 18,
    color: '#008937',
    marginBottom: 20,
  },
  div: {
    width: '100%',
    marginTop: 54,
  },
  forgotPassword: {
    fontFamily: 'Kanit_400Regular',
    textAlign: 'right',
    marginBottom: 30,
    marginHorizontal: 4,
    color: '#008937',
    fontSize: 16,
  },
});

export {style}