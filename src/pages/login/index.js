import React, { useState } from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import CustomInput from '../../components/custom-input';
import CustomButton from '../../components/custom-button';
import AlertBox from '../../components/alert-box';
import LoadingModal from '../../components/loader';
import { style } from './style.js';
import { post } from '../../services/api';
import { useAuth } from '../../contexts/auth.js';

export default function LoginScreen({ navigation, route }) {
  const { successMessage } = route.params || {};
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const endpoint = "login";
    setLoading(true);
    try {
      const data = await post(endpoint, { email, password });
      await login(data.token);
    } catch (error) {
      setError("Falha ao realizar login. Verifique suas credenciais.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView 
      style={style.container}
      contentContainerStyle={style.scrollView}
      showsVerticalScrollIndicator={false}
    >
      <Image 
        source={require('../../../assets/logo.png')} 
        style={style.logo}
        resizeMode="contain"
      />

      <Text style={style.title}>SETA</Text>

      {successMessage && (
        <AlertBox 
          message={successMessage}
          type="success"
          onClose={() => navigation.setParams({ successMessage: null })}
        />
      )}

      {error !== '' && (
        <AlertBox 
          message={error}
          type="error"
          onClose={() => setError('')}
        />
      )}

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

      <LoadingModal show={loading} />
    </ScrollView>
  );
}