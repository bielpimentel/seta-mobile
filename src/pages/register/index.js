import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import CustomInput from '../../components/custom-input';
import CustomButton from '../../components/custom-button';
import { style } from './style.js';

export default function Register({ navigation }) {
  return (
    <View style={style.container}>
      <Image 
        source={require('../../../assets/logo.png')} 
        style={style.logo}
        resizeMode="contain"
      />

      <Text style={style.title}>SETA</Text>

      <Feather 
        name="user-plus" 
        size={40} 
        color="#008937" 
      />

      <Text style={style.subtitle}>Crie sua conta</Text>

      <CustomInput 
        placeholder="Digite seu nome completo"
        label="Nome completo"
      />

      <CustomInput 
        placeholder="Digite seu e-mail"
        label="E-mail institucional"
      />

      <View style={style.div}>
        <CustomButton 
          title="CONFIRMAR"
          isMain={true}
          action={() => console.log('Registrado!')}
        />

        <CustomButton 
          title="IR PARA LOGIN"
          isMain={false}
          action={() => navigation.navigate("Login")}
        />
      </View>

      <TouchableOpacity
        style={{ marginTop: 20, padding: 10, backgroundColor: '#ccc', borderRadius: 5 }}
        onPress={() => navigation.navigate("RegisterConfirm")}
      >
        <Text style={{ textAlign: 'center' }}>Ir para confirmação (teste)</Text>
      </TouchableOpacity>
    </View>
  );
}