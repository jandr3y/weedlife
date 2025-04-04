"use client"
import { getProductBySlug } from "@/mocks";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface Product {
  id: string;
  name: string;
  value: number;
  slug: string,
  url: string;
  picture: string;
}

interface CartItem extends Product {
  quantity: number
}

interface CartContextType {
  cart: CartItem[];
  add: (item: Product) => void;
  remove: (id: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const compressData = (data: CartItem[]) => {
  return JSON.stringify(
    data.map(item => ({
      slug: item.slug,
      quantity: item.quantity
    }))
  )
}

export const uncompressData = (storageData: string) => {
  try {
    const decoded = JSON.parse(storageData)
    const uncompressed = decoded.map((item: { slug: string, quantity: string }) => ({
      ...getProductBySlug(item.slug),
      quantity: item.quantity
    }))

    return uncompressed
  } catch (err) {
    console.log(err)
  }
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", compressData(cart));
  }, [cart]);

  const add = (item: Product) => {
    setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
  };

  const remove = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, add, remove, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};