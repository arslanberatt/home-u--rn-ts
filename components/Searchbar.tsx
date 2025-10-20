import { View, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { SearchBarContent } from '@/utils/types';

const Searchbar = ({ placeholder }: SearchBarContent) => {
  return (
    <View className="mt-6 flex-row items-center justify-between rounded-full bg-white">
      <View className="flex-row items-center gap-2 p-2">
        <Ionicons name="search-outline" size={24} color="black" />
        <TextInput placeholder={placeholder} placeholderTextColor="#9AA0A6" />
      </View>
      <TouchableOpacity>
        <View className="rounded-full bg-gray-900 p-4">
          <Feather
            name="sliders"
            size={18}
            color="#f0f0f0"
            style={{
              transform: [
                { rotate: '90deg' },
                { translateY: 1 }, // opsiyonel ince ayar
              ],
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Searchbar;
