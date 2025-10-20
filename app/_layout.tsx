import '../global.css';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          marginHorizontal: 32,
          bottom: 48,
          height: 64,
          backgroundColor: '#111827',
          borderRadius: 32,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              style={{ top: 10 }}
              name={focused ? 'home' : 'home-outline'}
              size={22}
              color={focused ? 'white' : 'gray'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              style={{ top: 10 }}
              name={focused ? 'heart' : 'heart-outline'}
              size={22}
              color={focused ? 'white' : 'gray'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              style={{ top: 10 }}
              name={focused ? 'cart' : 'cart-outline'}
              size={22}
              color={focused ? 'white' : 'gray'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              style={{ top: 10 }}
              name={focused ? 'settings' : 'settings-outline'}
              size={22}
              color={focused ? 'white' : 'gray'}
            />
          ),
        }}
      />
    </Tabs>
  );
}
