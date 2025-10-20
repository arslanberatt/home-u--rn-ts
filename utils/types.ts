import { ImageSourcePropType } from 'react-native';
import { Placeholder } from './../node_modules/@babel/types/lib/index-legacy.d';
export type HeaderContent = {
  greeting: string;
  fullName: string;
};

export type SearchBarContent = {
  placeholder: string;
};

export type BrandProps = {
  id: string;
  name: string;
  image: ImageSourcePropType;
};

export type CategoriesProps = {
  brands: BrandProps[];
};

export type CardProps = {
  id: string;
  model: string;
  price: number;
  rating: number;
  image: ImageSourcePropType;
};

export type ProductsProps = {
  products: CardProps[];
};
