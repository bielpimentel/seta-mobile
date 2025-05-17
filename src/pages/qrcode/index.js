import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../components/header';
import BackButton from '../../components/back-button';
import AlertBox from '../../components/alert-box';
import QRCode from 'react-native-qrcode-svg';
import LoadingModal from '../../components/loader';
import { authGet } from "../../services/api.js";
import { style } from './style.js';

export default function QRCodeScreen({ navigation }) {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('---');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getToken = async () => {
    setLoading(true);
    try {
      const response = await authGet("qrcode/generate");
      setToken(response.token);
    } catch (error) {
      setError("Falha ao gerar QR Code. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  const getUser = async () => {
    setLoading(true);
    try {
      const response = await authGet("users");
      setUser(response);
    } catch (error) {
      setError("Ops, algo deu errado...");
    } finally {
      setLoading(false);
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

      {error !== '' && (
        <AlertBox 
          message={error}
          type="error"
          onClose={() => setError('')}
        />
      )}

      <View style={style.content}>
        <View style={style.qrWrapper}>
          <QRCode 
            value={token || '---'} 
            size={140} 
            color="#008435" 
            backgroundColor="#e9efd0"
          />
        </View>
        <TouchableOpacity onPress={getToken} style={style.refreshButton}>
          <Ionicons name="refresh" size={40} color="#008435" />
        </TouchableOpacity>
        <Text style={style.email}>{user.email}</Text>

        <TouchableOpacity onPress={() => console.log('Acessando suporte...')}>
          <Text style={style.helpLink}>Problemas com o acesso?</Text>
        </TouchableOpacity>
      </View>

      <LoadingModal show={loading} />
    </View>
  );
}