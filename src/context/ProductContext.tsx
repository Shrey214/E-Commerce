import axios from "axios";
import React, { createContext, ReactNode, useState } from "react";
import { Product } from "../types/ProductType";
import { SingleProduct } from "../types/SingleProductType";

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
  singleProduct: SingleProduct;
  setSingleProduct: React.Dispatch<React.SetStateAction<SingleProduct>>;
  fetchSingleProduct: (url: string) => Promise<void>;
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
  singleProduct: {
    id: "",
    name: "",
    price: 0,
    company: "",
    colors: [""],
    description: "",
    category: "",
    featured: false,
    shipping: false,
    stock: 0,
    reviews: 0,
    stars: 0,
    image: [],
  },
  setSingleProduct: () => {},
  fetchSingleProduct: async () => {},
});

interface ChildrenType {
  children: ReactNode;
}

export default function ProductContextProvider({ children }: ChildrenType) {
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [featureProducts, setFeatureProducts] = useState<Product[]>([]);
  const [singleProduct, setSingleProduct] = useState<SingleProduct>({
    id: "",
    name: "",
    price: 0,
    company: "",
    colors: [""],
    description: "",
    category: "",
    featured: false,
    shipping: false,
    stock: 0,
    reviews: 0,
    stars: 0,
    image: [],
  });

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
      setFeatureProducts(featureProducts);
    } catch (error) {
      setIsError(true);
    }
    setLoading(false);
  }

  async function fetchSingleProduct(url: string) {
    setLoading(true);
    try {
      const res = await axios.get(url);
      const singleProduct: SingleProduct = res.data;
      // console.log(singleProduct);
      setSingleProduct(singleProduct);
    } catch (error) {
      setIsError(true);
      console.log(error);
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
    singleProduct,
    setSingleProduct,
    fetchSingleProduct,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
