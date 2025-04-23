import React from 'react';
import { View, Text, Image, StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import PhotosScreen from './PhotosScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

function CustomHeader() {
  return (
    <View
      style={{
        backgroundColor: '#333',
        paddingTop: Platform.OS === 'android' ? 30 : 20,
        paddingBottom: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <StatusBar barStyle="light-content" />
      <Image
        source={{ uri: 'https://ztu.edu.ua/img/logo/university-white.png' }}
        style={{ width: 100, height: 30 }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff', marginTop: 10 }}>
        Третя версія додатку
      </Text>
    </View>
  );
}

function FooterInfo() {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#333',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: '#fff', fontSize: 14 }}>
        Іванов Іван Іванович
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          header: () => <CustomHeader />,
          tabBarIcon: ({ color, size }) => {
            const icons = {
              'Головна': 'home',
              'Фотогалерея': 'images',
              'Профіль': 'person',
            };
            return <Ionicons name={icons[route.name]} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            height: '7%',
          },
        })}
      >
        <Tab.Screen name="Головна" component={HomeScreen} />
        <Tab.Screen name="Фотогалерея" component={PhotosScreen} />
        <Tab.Screen name="Профіль" component={ProfileScreen} />
      </Tab.Navigator>
      <FooterInfo />
    </NavigationContainer>
  );
}
