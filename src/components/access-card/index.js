import React from 'react';
import { style } from './style.js';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

export default function AccessCard({ user, onShowQRCode }) {
  return (
    <View style={style.card}>
      <View style={style.qrRow}>
        <Ionicons name="qr-code-outline" size={22} color="#008435" />
        <TouchableOpacity onPress={onShowQRCode}>
          <Text style={style.qrText}>Exibir QRCode</Text>
        </TouchableOpacity>
      </View>

      <View style={style.content}>
        <Ionicons name="finger-print-outline" size={42} color="#008435" style={style.icon} />
        <View>
          <Text style={style.label}>NOME</Text>
          <Text style={style.text}>{user.name}</Text>
          <Text style={style.label}>E-MAIL</Text>
          <Text style={style.text}>{user.email}</Text>
        </View>
      </View>
    </View>
  );
}