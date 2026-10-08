import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { rupiah } from "../../utils/data";

function Checkout() {
  const { cart, totalHarga, clearCart } = useCart();
  const [form, setForm] = useState({ nama: "", alamat: "", metode: "Transfer" });
  const [selesai, setSelesai] = useState(false);

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const kirim = (e) => { e.preventDefault(); clearCart(); setSelesai(true); };

  // Conditional rendering 1: pesanan berhasil
  if (selesai) {
    return (
      <div className="rounded-3xl bg-[#fffaf6] p-12 text-center shadow-md">
        <div className="text-6xl">🎉</div>
        <h2 className="mt-3 text-2xl font-bold">Pesanan berhasil, {form.nama}!</h2>
        <p className="mt-1 text-[#7a5a4a]">Coklatmu segera dikirim ke {form.alamat}.</p>
        <Link to="/" className="mt-5 inline-block rounded-full bg-[#8c5a3c] px-6 py-3 font-semibold text-white">Kembali ke beranda</Link>
      </div>
    );
  }

  // Conditional rendering 2: belum ada barang
  if (cart.length === 0) {
    return (
      <div className="rounded-3xl bg-[#fffaf6] p-12 text-center shadow-md">
        <p className="text-xl">Belum ada barang untuk di-checkout.</p>
        <Link to="/" className="mt-4 inline-block font-semibold text-[#8c5a3c]">Belanja dulu</Link>
      </div>
    );
  }

  const input = "w-full rounded-2xl border-2 border-[#ecd6c8] bg-white px-4 py-3 outline-none focus:border-[#8c5a3c]";

  return (
    <div className="grid gap-6 md:grid-cols-5">
      <form onSubmit={kirim} className="space-y-4 rounded-3xl bg-[#fffaf6] p-8 shadow-md md:col-span-3">
        <h2 className="text-2xl font-extrabold">Data pemesan</h2>
        <input name="nama" value={form.nama} onChange={ubah} required placeholder="Nama lengkap" className={input} />
        <textarea name="alamat" value={form.alamat} onChange={ubah} required placeholder="Alamat pengiriman" rows="3" className={input} />
        <select name="metode" value={form.metode} onChange={ubah} className={input}>
          <option>Transfer</option>
          <option>COD (bayar di tempat)</option>
          <option>E-wallet</option>
        </select>
        <button type="submit" className="w-full rounded-full bg-[#8c5a3c] py-3 font-bold text-white">Buat pesanan</button>
      </form>

      <div className="h-fit rounded-3xl bg-[#fffaf6] p-8 shadow-md md:col-span-2">
        <h3 className="mb-3 text-xl font-bold">Ringkasan</h3>
        {cart.map((i) => (
          <div key={i.key} className="flex justify-between py-1 text-sm">
            <span>{i.nama} ({i.ukuran}) x{i.qty}</span>
            <span>{rupiah(i.qty * i.harga)}</span>
          </div>
        ))}
        <div className="mt-3 flex justify-between border-t border-[#ecd6c8] pt-3 text-lg font-bold">
          <span>Total</span><span className="text-[#8c5a3c]">{rupiah(totalHarga)}</span>
        </div>
      </div>
    </div>
  );
}

export default Checkout;