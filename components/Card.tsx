import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CardProps } from '@/utils/types';

const Card = ({ image, model, price, rating }: CardProps) => {
  const [favourite, setFavourite] = useState(false);
  return (
    <TouchableOpacity activeOpacity={0.9} className="relative flex-1 rounded-3xl bg-gray-100">
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setFavourite(!favourite)}
        className="absolute top-0 z-10 m-2 rounded-full bg-white p-2">
        <Ionicons name={favourite ? 'heart' : 'heart-outline'} size={24} color="#111" />
      </TouchableOpacity>
      <View className="rounded-t-3xl p-1">
        <Image source={image} resizeMode="contain" style={{ width: '100%', height: 150 }} />
      </View>
      <View className="flex items-start p-2">
        <Text numberOfLines={1} className="text-xl font-semibold">
          {model}
        </Text>
        <View className="flex-row items-center gap-5">
          <Text className="text-sm font-semibold">${price.toLocaleString()}</Text>
          <View className="flex-row items-center gap-1">
            <Ionicons name="star" size={16} color="#FFB800" />
            <Text className="text-sm font-semibold">{rating.toFixed(1)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
