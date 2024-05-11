import axios from "axios";
import React, { createContext, ReactNode, useState } from "react";
import { Product } from "../types/ProductType";

interface ProductContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isError: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  featureProducts: Product[];
  setFeatureProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  fetchProducts: () => Promise<void>;
}

export const ProductContext = createContext<ProductContextType>({
  loading: false,
  setLoading: () => {},
  isError: false,
  setIsError: () => {},
  products: [],
  setProducts: () => {},
  featureProducts: [],
  setFeatureProducts: () => {},
  fetchProducts: async () => {},
});

interface childrenType {
  children: ReactNode;
}

export default function ProductContextProvider({ children }: childrenType) {
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [featureProducts, setFeatureProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    setLoading(true);
    const url = "https://api.pujakaitem.com/api/products";
    try {
      const res = await axios.get(url);
      const products: Product[] = res.data;
      const featureProducts: Product[] = products.filter(
        (product: Product) => product.featured === true
      );
      setProducts(products);
      console.log(products);
      console.log(featureProducts);
      setFeatureProducts(featureProducts);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setLoading(false);
  }

  const value: ProductContextType = {
    loading,
    setLoading,
    isError,
    setIsError,
    products,
    setProducts,
    featureProducts,
    setFeatureProducts,
    fetchProducts,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
