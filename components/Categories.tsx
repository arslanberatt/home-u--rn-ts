import { View, Text, ImageSourcePropType, Image, FlatList } from 'react-native';
import React from 'react';
import { BrandProps, CategoriesProps } from '@/utils/types';

const Categories = ({ brands }: CategoriesProps) => {
  return (
    <FlatList
      className="mt-8"
      data={brands}
      renderItem={({ item }: { item: BrandProps }) => (
        <View className="flex items-center gap-3">
          <View className="rounded-full bg-gray-900 p-1">
            <Image
              source={item.image}
              style={{ width: 64, height: 64, borderRadius: 100, opacity: 0.9, padding: 8 }}
            />
          </View>
          <Text numberOfLines={1}>{item.name}</Text>
        </View>
      )}
      keyExtractor={(i) => i.id}
      contentContainerClassName="gap-8"
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Categories;
