import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function CustomInput({ label, placeholder, isPassword, value, onChangeText }) {
  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <TextInput
        style={style.input}
        placeholder={placeholder}
        placeholderTextColor="#BBB"
        secureTextEntry={isPassword}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 2,
  },
  label: {
    fontFamily: 'Kanit_400Regular',
    fontSize: 16,
    color: '#008937',
    marginTop: 2,
    marginHorizontal: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#008937',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
});