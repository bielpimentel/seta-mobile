import React from 'react';
import { style } from './style.js';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function NavigationCard({ title, icon, onPress }) {
  return (
    <TouchableOpacity style={style.card} onPress={onPress}>
      <Feather name={icon} size={40} color="#008435" />
      <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
  );
}