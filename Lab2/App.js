import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import StoreScreen from './screens/StoreScreen';
import CommunityScreen from './screens/CommunityScreen';
import ChatScreen from './screens/ChatScreen';
import SafetyScreen from './screens/SafetyScreen';
import ProfileScreen from './screens/ProfileScreen';
import { lightTheme, darkTheme } from './themes';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <NavigationContainer
        theme={{
          dark: isDarkTheme,
          colors: {
            background: isDarkTheme ? darkTheme.background : lightTheme.background,
            card: isDarkTheme ? darkTheme.cardBackground : lightTheme.cardBackground,
            text: isDarkTheme ? darkTheme.text : lightTheme.text,
            primary: isDarkTheme ? darkTheme.accent : lightTheme.accent,
            border: 'transparent',
          },
        }}
      >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Store') iconName = 'storefront';
              else if (route.name === 'Community') iconName = 'people';
              else if (route.name === 'Chat') iconName = 'chatbubbles';
              else if (route.name === 'Safety') iconName = 'shield';
              else if (route.name === 'Profile') iconName = 'person';
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarStyle: { backgroundColor: isDarkTheme ? darkTheme.cardBackground : lightTheme.cardBackground },
            tabBarActiveTintColor: isDarkTheme ? darkTheme.accent : lightTheme.accent,
            tabBarInactiveTintColor: isDarkTheme ? '#888' : '#666',
            headerStyle: {
              backgroundColor: isDarkTheme ? darkTheme.cardBackground : lightTheme.cardBackground,
            },
            headerTintColor: isDarkTheme ? darkTheme.text : lightTheme.text,
          })}
        >
          <Tab.Screen name="Store">
            {() => <StoreScreen toggleTheme={toggleTheme} />}
          </Tab.Screen>
          <Tab.Screen name="Community" component={CommunityScreen} />
          <Tab.Screen name="Chat" component={ChatScreen} />
          <Tab.Screen name="Safety" component={SafetyScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}