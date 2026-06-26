"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Tone } from "@/lib/products";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  size: string;
  image: string;
  tone: Tone;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  addItem: (item: Omit<CartItem, "qty">) => void;
  removeItem: (slug: string, size: string) => void;
  setQty: (slug: string, size: string, qty: number) => void;
  count: number;
  total: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "coralina-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Carrega do localStorage após montar (evita mismatch de hidratação).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignora storage corrompido
    }
    setHydrated(true);
  }, []);

  // Persiste a cada mudança (só depois de hidratar).
  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((item: Omit<CartItem, "qty">) => {
    setItems((prev) => {
      const i = prev.findIndex((p) => p.slug === item.slug && p.size === item.size);
      if (i === -1) return [...prev, { ...item, qty: 1 }];
      const next = [...prev];
      next[i] = { ...next[i], qty: next[i].qty + 1 };
      return next;
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((slug: string, size: string) => {
    setItems((prev) => prev.filter((p) => !(p.slug === slug && p.size === size)));
  }, []);

  const setQty = useCallback((slug: string, size: string, qty: number) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((p) => !(p.slug === slug && p.size === size))
        : prev.map((p) =>
            p.slug === slug && p.size === size ? { ...p, qty } : p,
          ),
    );
  }, []);

  const count = useMemo(() => items.reduce((n, i) => n + i.qty, 0), [items]);
  const total = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [items],
  );

  const value: CartContextValue = {
    items,
    isOpen,
    open,
    close,
    addItem,
    removeItem,
    setQty,
    count,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro de <CartProvider>");
  return ctx;
}
