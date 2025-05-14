import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function BackButton ({ navigation }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.goBack()}>
      <View style={styles.inner}>
        <MaterialIcons name="keyboard-backspace" size={26} color="#008435" />
        <Text style={styles.text}>Voltar</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 8,
    fontFamily: 'Kanit_400Regular',
    fontSize: 20,
    color: '#008435',
    fontWeight: '500',
  },
});