import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  card: {
    backgroundColor: '#E9EFD0',
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#B7D8B1',
  },
  qrRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  qrText: {
    color: '#008435',
    fontFamily: 'Kanit_400Regular',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#B7D8B1',
  },
  icon: {
    marginRight: 16,
  },
  label: {
    fontFamily: 'Kanit_700Bold',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#008435',
  },
  text: {
    fontFamily: 'Kanit_300Light',
    fontSize: 16,
    color: '#008435',
    marginBottom: 8,
  },
});

export { style }