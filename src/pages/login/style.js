import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfff7',
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
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