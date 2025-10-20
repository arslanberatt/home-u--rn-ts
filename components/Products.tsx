import { View, Text, FlatList } from 'react-native';
import React from 'react';
import Card from './Card';
import { CardProps, ProductsProps } from '@/utils/types';

const Products = ({ products }: ProductsProps) => {
  return (
    <FlatList
      className="mt-8"
      data={products}
      keyExtractor={(i) => i.id}
      renderItem={({ item }: { item: CardProps }) => (
        <Card
          id={item.id}
          model={item.model}
          price={item.price}
          rating={item.rating}
          image={item.image}
        />
      )}
      numColumns={2}
      scrollEnabled={false}
      contentContainerClassName="bg-white p-8"
      ListHeaderComponent={() => (
        <View className="flex-row items-center justify-between">
          <Text className="text-3xl font-semibold">Popular Car</Text>
          <Text className="text-lg font-semibold text-gray-400">View All</Text>
        </View>
      )}
      columnWrapperStyle={{ gap: 12 }}
      contentContainerStyle={{ gap: 12, borderTopRightRadius: 36, borderTopLeftRadius: 36 }}
    />
  );
};

export default Products;
