import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  button: {
    paddingVertical: 6,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginVertical: 8,
    borderWidth: 2,
    borderColor: '#008937',
  },
  mainButton: {
    backgroundColor: '#008937',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
  },
  text: {
    fontFamily: 'Kanit_500Medium',
    letterSpacing: 1,
    fontSize: 18,
  },
  mainText: {
    color: '#fff',
  },
  secondaryText: {
    color: '#008937',
  },
});

export {style}