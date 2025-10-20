import { View, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import Searchbar from '@/components/Searchbar';
import Categories from '@/components/Categories';
import Products from '@/components/Products';
import { BRANDS, CARS } from '@/data/data';

const Index = () => {
  return (
    <SafeAreaView className="bg-gray-100">
      <ScrollView>
        <View className="px-8">
          <Header greeting={'Welcome'} fullName={'Berat Arslan'} />
          <Searchbar placeholder="Search your car" />
          <Categories brands={BRANDS} />
        </View>
        <Products products={CARS} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
