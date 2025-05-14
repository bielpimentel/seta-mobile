import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfff7',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrWrapper: {
    borderRadius: 8,
    backgroundColor: '#e9efd0',
    borderColor: '#008435',
    borderWidth: 4,
    padding: 7,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  email: {
    marginBottom: 56,
    fontFamily: 'Kanit_300Light',
    fontSize: 16,
    color: '#008435',
    textAlign: 'center',
  },
  helpLink: {
    color: '#008435',
    fontFamily: 'Kanit_400Regular',
    fontSize: 18,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export { style };