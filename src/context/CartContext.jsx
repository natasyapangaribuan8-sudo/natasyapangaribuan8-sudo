import { createContext, useContext, useState } from "react";
import { hargaUkuran } from "../utils/data";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // produk + ukuran dianggap satu item (key = id-ukuran)
  const addToCart = (produk, ukuran, jumlah = 1) => {
    const key = `${produk.id}-${ukuran.label}`;
    setCart((prev) => {
      const ada = prev.find((i) => i.key === key);
      if (ada) {
        return prev.map((i) =>
          i.key === key ? { ...i, qty: Math.min(i.qty + jumlah, i.stok) } : i
        );
      }
      return [
        ...prev,
        {
          key,
          id: produk.id,
          nama: produk.nama,
          palet: produk.palet,
          stok: produk.stok,
          ukuran: ukuran.label,
          harga: hargaUkuran(produk.harga, ukuran.faktor),
          qty: Math.min(jumlah, produk.stok),
        },
      ];
    });
  };

  const updateQty = (key, qty) =>
    setCart((prev) =>
      prev.map((i) => (i.key === key ? { ...i, qty: Math.min(Math.max(qty, 1), i.stok) } : i))
    );
  const removeFromCart = (key) => setCart((prev) => prev.filter((i) => i.key !== key));
  const clearCart = () => setCart([]);

  const totalItem = cart.reduce((s, i) => s + i.qty, 0);
  const totalHarga = cart.reduce((s, i) => s + i.qty * i.harga, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQty, removeFromCart, clearCart, totalItem, totalHarga }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);