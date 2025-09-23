import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import DeliScreen from '../screens/DeliScreen';

export type RootTabParamList = {
  Inicio: undefined;
  Deli: undefined;
  Carrito: undefined;
  Pedidos: undefined;
  Perfil: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const Stub = ({ label }: { label: string }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize: 18 }}>{label}</Text>
  </View>
);

const ICONS: Record<keyof RootTabParamList, string> = {
  Inicio: 'home',
  Deli: 'restaurant',
  Carrito: 'cart',
  Pedidos: 'receipt',
  Perfil: 'person',
};

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#f2b705',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarIcon: ({ color, size }) => {
          const key = route.name as keyof RootTabParamList;
          const icon = ICONS[key] ?? 'home';
          return <Ionicons name={icon} size={size ?? 22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Deli" component={DeliScreen} />
      <Tab.Screen name="Carrito" component={() => <Stub label="Carrito" />} />
      <Tab.Screen name="Pedidos" component={() => <Stub label="Pedidos" />} />
      <Tab.Screen name="Perfil" component={() => <Stub label="Perfil" />} />
    </Tab.Navigator>
  );
}