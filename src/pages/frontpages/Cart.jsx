import { Link } from "react-router-dom";
import ChocoBar from "../../components/ChocoBar";
import { useCart } from "../../context/CartContext";
import { palet, rupiah } from "../../utils/data";

function Cart() {
  const { cart, updateQty, removeFromCart, totalHarga } = useCart();

  // Conditional rendering: keranjang kosong
  if (cart.length === 0) {
    return (
      <div className="rounded-3xl bg-[#fffaf6] p-12 text-center shadow-md">
        <div className="text-6xl">🛒</div>
        <h2 className="mt-3 text-2xl font-bold">Keranjang masih kosong</h2>
        <p className="mt-1 text-[#7a5a4a]">Pilih coklat favoritmu dulu.</p>
        <Link to="/" className="mt-5 inline-block rounded-full bg-[#8c5a3c] px-6 py-3 font-semibold text-white">Mulai belanja</Link>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-[#fffaf6] p-8 shadow-md">
      <h2 className="mb-4 text-2xl font-extrabold">Keranjang belanja</h2>
      {cart.map((item) => (
        <div key={item.key} className="flex flex-wrap items-center gap-4 border-b border-[#ecd6c8] py-4">
          <div className="w-20 rounded-xl bg-[#f3e6da] p-1"><ChocoBar palet={palet[item.palet]} className="h-12 w-full" /></div>
          <div className="min-w-[140px] flex-1">
            <p className="font-bold">{item.nama}</p>
            <p className="text-sm text-[#7a5a4a]">{item.ukuran} · {rupiah(item.harga)}</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => updateQty(item.key, item.qty - 1)} className="h-8 w-8 rounded-full bg-[#ecd6c8] font-bold">−</button>
            <span className="w-6 text-center font-bold">{item.qty}</span>
            <button onClick={() => updateQty(item.key, item.qty + 1)} className="h-8 w-8 rounded-full bg-[#ecd6c8] font-bold">+</button>
          </div>
          <p className="w-28 text-right font-bold">{rupiah(item.qty * item.harga)}</p>
          <button onClick={() => removeFromCart(item.key)} className="text-sm font-semibold text-red-700">Hapus</button>
        </div>
      ))}
      <div className="flex items-center justify-between py-5 text-xl">
        <span>Total</span>
        <strong className="text-2xl text-[#8c5a3c]">{rupiah(totalHarga)}</strong>
      </div>
      <Link to="/checkout" className="block rounded-full bg-[#8c5a3c] py-3 text-center font-bold text-white">Lanjut ke checkout</Link>
    </div>
  );
}

export default Cart;