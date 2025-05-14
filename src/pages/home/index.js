import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList } from 'react-native';
import Header from '../../components/header';
import AccessCard from '../../components/access-card';
import NavigationCard from '../../components/navigation-card';
import { authGet } from "../../services/api.js";
import { style } from "./style.js";

export default function HomeScreen({ navigation }) {
  const [user, setUser] = useState({name: '---', email: '---'});

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
  }, []);

  const navigationItems = [
    { title: 'Meu perfil', icon: 'user', onPress: () => console.log('Acessar perfil') },
    { title: 'Configurações', icon: 'settings', onPress: () => console.log('Acessar configurações') },
    { title: 'Suporte', icon: 'message-square', onPress: () => console.log('Acessar suporte') },
  ];

  return (
    <View style={style.container}>
      <Header title="HOME" />

      <ScrollView contentContainerStyle={style.scrollView}>
        <Text style={style.sectionTitle}>Cartão de acesso</Text>
        <AccessCard user={user} onShowQRCode={() => navigation.navigate("QRCode")} />

        <Text style={style.sectionTitle}>Navegação</Text>
        <FlatList
          data={navigationItems}
          numColumns={2}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <NavigationCard title={item.title} icon={item.icon} onPress={item.onPress} />
          )}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
}