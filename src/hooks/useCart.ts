
import { useState, useEffect } from 'react';
import { CartItem } from '@/types';

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  const saveToStorage = (newItems: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(newItems));
    setItems(newItems);
  };

  const addItem = (item: CartItem) => {
    const existingIndex = items.findIndex(i => i.variantId === item.variantId);
    
    if (existingIndex >= 0) {
      const newItems = [...items];
      newItems[existingIndex].qty += item.qty;
      saveToStorage(newItems);
    } else {
      saveToStorage([...items, item]);
    }
  };

  const removeItem = (variantId: string) => {
    const newItems = items.filter(item => item.variantId !== variantId);
    saveToStorage(newItems);
  };

  const updateQuantity = (variantId: string, qty: number) => {
    if (qty <= 0) {
      removeItem(variantId);
      return;
    }
    
    const newItems = items.map(item => 
      item.variantId === variantId ? { ...item, qty } : item
    );
    saveToStorage(newItems);
  };

  const getTotalPrice = () => {
    return items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  };

  const getTotalItems = () => {
    return items.reduce((sum, item) => sum + item.qty, 0);
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setItems([]);
  };

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    clearCart
  };
};
