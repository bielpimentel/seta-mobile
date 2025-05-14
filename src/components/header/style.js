import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  header: {
    backgroundColor: '#008435',
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Kanit_500Medium',
    color: '#fff',
    fontSize: 20,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export { style }