import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import CustomInput from '../../components/custom-input/index.js';
import CustomButton from '../../components/custom-button/index.js';
import { style } from './style.js';
import { post } from '../../services/api.js';

export default function RegisterConfirm({ navigation }) {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = async () => {
    try {
      const data = await post({ password, passwordConfirmation });
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

      <TouchableOpacity
        style={{ marginTop: 20, padding: 10, backgroundColor: '#ccc', borderRadius: 5 }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ textAlign: 'center' }}>Ir para Home (teste)</Text>
      </TouchableOpacity>
    </View>
  );
}