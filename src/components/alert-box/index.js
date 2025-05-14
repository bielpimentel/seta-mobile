import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function AlertBox({ message, type = 'error', onClose }) {
  const background = {
    success: '#b8f2c6',
    error: '#ffbabf',
    info: '#d1ecf1',
  };

  const text = {
    success: '#008937',
    error: '#bc000f',
    info: '#0c5460',
  };

  return (
    <View style={{
      backgroundColor: background[type] || '#ccc',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
      marginBottom: 30,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 15,
    }}>
      <Text style={{ color: text[type] || '#000', flex: 1, textAlign: 'center' }}>
        {message}
      </Text>

      {onClose && (
        <TouchableOpacity onPress={onClose}>
          <Feather name="x" size={20} color={text[type] || '#000'} />
        </TouchableOpacity>
      )}
    </View>
  );
}