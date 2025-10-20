import { View, Text, Image } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { HeaderContent } from '@/utils/types';

const Header = ({ greeting, fullName }: HeaderContent) => {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center gap-3">
        <Image
          source={require('@/assets/LinkAvatar.png')}
          style={{ width: 64, height: 64, borderRadius: 100 }}
        />
        <View className="flex">
          <View className="flex-row items-center gap-2">
            <Text className="text-lg text-slate-400">{greeting}</Text>
            <Text className="m-0 p-0 text-lg ">👋</Text>
          </View>
          <Text className="text-2xl font-bold text-gray-800">{fullName}</Text>
        </View>
      </View>
      <View className="rounded-full bg-white p-4">
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
    </View>
  );
};

export default Header;
