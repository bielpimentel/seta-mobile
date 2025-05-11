import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { style } from './style.js';

export default function CustomButton({ title, action, isMain }) {
  return (
    <TouchableOpacity
      style={[style.button, isMain ? style.mainButton : style.secondaryButton]}
      onPress={action}
    >
      <Text style={[style.text, isMain ? style.mainText : style.secondaryText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}