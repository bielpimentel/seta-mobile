import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList } from 'react-native';
import Header from '../../components/header';
import AlertBox from '../../components/alert-box';
import AccessCard from '../../components/access-card';
import NavigationCard from '../../components/navigation-card';
import LoadingModal from '../../components/loader';
import { authGet } from "../../services/api.js";
import { style } from "./style.js";

export default function HomeScreen({ navigation }) {
  const [user, setUser] = useState({name: '---', email: '---'});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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

        {error !== '' && (
          <AlertBox 
            message={error}
            type="error"
            onClose={() => setError('')}
          />
        )}

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

      <LoadingModal show={loading} />
    </View>
  );
}