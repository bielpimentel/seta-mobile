import React from 'react';
import { Modal, View, ActivityIndicator, Text } from 'react-native';
import { style } from './style.js';

export default function LoadingModal({ show = false }) {
  return (
    <Modal
      transparent={true}
      visible={show}
      animationType="fade"
    >
      <View style={style.container}>
        <ActivityIndicator size="large" color="#008937" />
        <Text style={style.text}>Aguarde...</Text>
      </View>
    </Modal>
  );
}