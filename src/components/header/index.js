import React from 'react';
import { style } from './style.js';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useAuth } from '../../contexts/auth';

export default function Header({ title }) {
  const { logout } = useAuth();

  return (
    <View style={style.header}>
      <Text style={style.title}>{title}</Text>
      <TouchableOpacity onPress={logout}>
        <Feather name="log-out" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}