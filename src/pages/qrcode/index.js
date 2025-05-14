import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import Header from '../../components/header';
import BackButton from '../../components/back-button';
import QRCode from 'react-native-qrcode-svg';
import { authGet } from "../../services/api.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { style } from './style.js';

export default function QRCodeScreen({ navigation }) {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('---');

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      setToken(token);
    } catch (error) {
      console.error("Erro ao buscar token:", error);
    }
  }

  const getUser = async () => {
    try {
      const response = await authGet("users");
      setUser(response);
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
    }
  }

  useEffect(() => {
    getUser();
    getToken();
  }, []);

  return (
    <View style={style.container}>
      <Header title="QR CODE" showBack onBack={() => navigation.goBack()} />
      <BackButton navigation={navigation} />

      <View style={style.content}>
        <View style={style.qrWrapper}>
          <QRCode 
            value={token || '---'} 
            size={140} 
            color="#008435" 
            backgroundColor="#e9efd0"
          />
        </View>
        <Text style={style.email}>{user.email}</Text>

        <TouchableOpacity onPress={() => console.log('Acessando suporte...')}>
          <Text style={style.helpLink}>Problemas com o acesso?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}