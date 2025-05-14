import React, { useState } from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import CustomInput from '../../components/custom-input';
import CustomButton from '../../components/custom-button';
import AlertBox from '../../components/alert-box';
import LoadingModal from '../../components/loader';
import { style } from './style.js';
import { post } from '../../services/api.js';

export default function RegisterConfirmScreen({ navigation, route }) {
  const { token, email } = route.params || {};
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const endpoint = `new-account/${token}`;
    setLoading(true);
    try {
      const data = await post(endpoint, { email, password, passwordConfirmation });
      navigation.navigate("Login", { successMessage: "Cadastro realizado com sucesso!" });
    } catch (error) {
      setError("Falha ao finalizar cadastro. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView 
      style={style.container}
      contentContainerStyle={style.scrollView}
    >
      <Image 
        source={require('../../../assets/logo.png')} 
        style={style.logo}
        resizeMode="contain"
      />

      <Text style={style.title}>SETA</Text>

      {error !== '' && (
        <AlertBox 
          message={error}
          type="error"
          onClose={() => setError('')}
        />
      )}

      <Feather 
        name="user-check" 
        size={40} 
        color="#008937" 
      />

      <Text style={style.subtitle}>Finalize seu cadastro</Text>

      <CustomInput 
        placeholder="Escolha uma senha"
        label="Senha"
        isPassword={true}
        value={password}
        onChangeText={setPassword}
      />

      <CustomInput 
        placeholder="Digite novamente a senha"
        label="Confirmação de senha"
        isPassword={true}
        value={passwordConfirmation}
        onChangeText={setPasswordConfirmation}
      />

      <View style={style.div}>
        <CustomButton 
          title="CONFIRMAR"
          isMain={true}
          action={handleSubmit}
        />

        <CustomButton 
          title="IR PARA LOGIN"
          isMain={false}
          action={() => navigation.navigate("Login")}
        />
      </View>

      <LoadingModal show={loading} />
    </ScrollView>
  );
}