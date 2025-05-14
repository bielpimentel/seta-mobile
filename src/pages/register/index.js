import React, { useState } from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import CustomInput from '../../components/custom-input';
import CustomButton from '../../components/custom-button';
import AlertBox from '../../components/alert-box';
import LoadingModal from '../../components/loader';
import { style } from './style.js';
import { post } from '../../services/api.js';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const endpoint = `new-account`;
    setLoading(true);
    try {
      const data = await post(endpoint, { email, name });
      const msg = "Em breve você receberá um e-mail para finalizar seu cadastro. Cheque também a caixa de spam.";
      navigation.navigate("Login", { successMessage: msg });
    } catch (error) {
      setError("Falha ao realizar cadastro. Verifique os dados e tente novamente.");
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
        name="user-plus" 
        size={40} 
        color="#008937" 
      />

      <Text style={style.subtitle}>Crie sua conta</Text>

      <CustomInput 
        placeholder="Digite seu nome completo"
        label="Nome completo"
        value={name}
        onChangeText={setName}
      />

      <CustomInput 
        placeholder="Digite seu e-mail"
        label="E-mail institucional"
        value={email}
        onChangeText={setEmail}
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