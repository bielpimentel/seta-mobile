import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import CustomInput from '../../components/custom-input';
import CustomButton from '../../components/custom-button';
import { style } from './style.js';
import { post } from '../../services/api';
import { useAuth } from '../../contexts/auth.js';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
    const endpoint = "login";
    try {
      const data = await post(endpoint, { email, password });
      await login(data.token);
      Alert.alert("Login realizado com sucesso!");
    } catch (error) {
      Alert.alert("Erro", "Falha ao realizar login.");
    }
  };

  return (
    <View style={style.container}>
      <Image 
        source={require('../../../assets/logo.png')} 
        style={style.logo}
        resizeMode="contain"
      />

      <Text style={style.title}>SETA</Text>

      <Feather 
        name="log-in" 
        size={40} 
        color="#008937" 
      />

      <Text style={style.subtitle}>Acesse sua conta</Text>

      <CustomInput 
        placeholder="Digite seu e-mail"
        label="E-mail"
        value={email}
        onChangeText={setEmail}
      />

      <CustomInput 
        placeholder="●●●●●●●●"
        label="Senha"
        isPassword={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={style.div} onPress={() => navigation.navigate("PasswordReset")}>
        <Text style={style.forgotPassword}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <CustomButton 
        title="LOGIN"
        isMain={true}
        action={handleLogin}
      />

      <CustomButton 
        title="CRIAR CONTA"
        isMain={false}
        action={() => navigation.navigate("Register")}
      />

      <TouchableOpacity
        style={{ marginTop: 20, padding: 10, backgroundColor: '#ccc', borderRadius: 5 }}
        onPress={() => navigation.navigate("RegisterConfirm")}
      >
        <Text style={{ textAlign: 'center' }}>Ir para confirmação de senha (teste)</Text>
      </TouchableOpacity>
    </View>
  );
}