import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CardProps } from '@/utils/types';

const Card = ({ image, model, price, rating }: CardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.9} className="relative flex-1 rounded-3xl bg-gray-100">
      <View className="absolute top-0 z-10 p-4">
        <Ionicons name="heart-outline" size={18} color="#111" />
      </View>
      <View className="rounded-t-3xl p-1">
        <Image source={image} resizeMode="contain" style={{ width: '100%', height: 150 }} />
      </View>
      <View className="p-2">
        <Text numberOfLines={1}>{model}</Text>
        <View>
          <Text>${price.toLocaleString()}</Text>
          <View>
            <Ionicons name="star" size={14} color="#FFB800" />
            <Text>{rating.toFixed(1)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
