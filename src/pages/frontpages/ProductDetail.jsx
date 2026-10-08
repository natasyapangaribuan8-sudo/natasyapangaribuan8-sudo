import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ChocoBar from "../../components/ChocoBar";
import { useCart } from "../../context/CartContext";
import { products, palet, ukuranList, hargaUkuran, rupiah } from "../../utils/data";

function ProductDetail() {
  const { id } = useParams();
  const produk = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();

  const [ukuran, setUkuran] = useState(ukuranList[0]);
  const [qty, setQty] = useState(1);
  const [berhasil, setBerhasil] = useState(false);
  const [ulasan, setUlasan] = useState([]);
  const [namaUser, setNamaUser] = useState("");
  const [rating, setRating] = useState(0);
  const [isi, setIsi] = useState("");

  // Conditional rendering: produk tidak ada
  if (!produk) {
    return (
      <div className="rounded-3xl bg-[#fffaf6] p-10 text-center">
        <p className="mb-4 text-xl">Produk tidak ditemukan.</p>
        <Link to="/" className="font-semibold text-[#8c5a3c]">← Kembali ke daftar</Link>
      </div>
    );
  }

  const habis = produk.stok === 0;

  const tambah = () => {
    addToCart(produk, ukuran, qty);
    setBerhasil(true);
    setTimeout(() => setBerhasil(false), 2000);
  };

  const kirimUlasan = () => {
    if (!namaUser || rating === 0 || !isi) return;
    setUlasan([{ nama: namaUser, rating, isi }, ...ulasan]);
    setNamaUser(""); setRating(0); setIsi("");
  };

  return (
    <>
      <div className="grid gap-8 rounded-3xl bg-[#fffaf6] p-8 shadow-md md:grid-cols-2">
        <div className="rounded-3xl bg-[#f3e6da] p-6">
          <ChocoBar palet={palet[produk.palet]} habis={habis} className="h-64 w-full" />
        </div>
        <div>
          <Link to="/" className="text-sm font-semibold text-[#8c5a3c]">← Kembali ke daftar</Link>
          <h1 className="mt-2 font-serif text-3xl font-extrabold">{produk.nama}</h1>
          <p className="text-[#a8734f]">{produk.kategori} · {produk.asal}</p>
          <p className="mt-4 text-3xl font-extrabold text-[#8c5a3c]">{rupiah(hargaUkuran(produk.harga, ukuran.faktor))}</p>
          <p className="mt-3">{produk.deskripsi}</p>

          <div className="mt-4 flex gap-2">
            {ukuranList.map((u) => (
              <button key={u.label} onClick={() => setUkuran(u)}
                className={"rounded-full border px-4 py-1 " + (ukuran.label === u.label ? "border-[#ecd6c8] bg-[#ecd6c8] text-[#6e3f27]" : "border-[#d9c6ba] text-[#7a5a4a]")}>
                {u.label}
              </button>
            ))}
          </div>

          {/* Conditional rendering: pilih jumlah hanya jika stok ada */}
          {habis ? (
            <p className="mt-6 font-bold text-red-700">Stok habis</p>
          ) : (
            <div className="mt-5 flex items-center gap-4">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="h-10 w-10 rounded-full bg-[#ecd6c8] text-xl font-bold">−</button>
              <span className="w-8 text-center text-xl font-bold">{qty}</span>
              <button onClick={() => setQty(Math.min(produk.stok, qty + 1))} className="h-10 w-10 rounded-full bg-[#ecd6c8] text-xl font-bold">+</button>
              <span className="text-sm text-[#7a5a4a]">Stok {produk.stok}</span>
            </div>
          )}

          <button disabled={habis} onClick={tambah}
            className="mt-6 w-full rounded-full bg-[#8c5a3c] py-3 font-bold text-white disabled:bg-[#e6dcd5] disabled:text-[#7a6a60]">
            {habis ? "Stok habis" : "Add to Cart"}
          </button>
          {berhasil && <p className="mt-3 font-semibold text-green-700">✓ Ditambahkan ke keranjang</p>}
        </div>
      </div>

      <div className="mt-6 rounded-3xl bg-[#fffaf6] p-8 shadow-md">
        <h2 className="mb-4 text-2xl font-extrabold text-[#8c5a3c]">Rating & Ulasan</h2>
        <input value={namaUser} onChange={(e) => setNamaUser(e.target.value)} placeholder="Nama kamu"
          className="w-full rounded-2xl border border-[#ecd6c8] px-5 py-3 outline-none focus:border-[#8c5a3c]" />
        <div className="my-4 flex items-center gap-1 text-3xl">
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} onClick={() => setRating(n)} className={n <= rating ? "text-[#e0a23c]" : "text-[#d9c6ba]"}>★</button>
          ))}
          <span className="ml-3 text-base text-[#7a5a4a]">{rating === 0 ? "Pilih rating" : `${rating} dari 5`}</span>
        </div>
        <textarea value={isi} onChange={(e) => setIsi(e.target.value)} rows="3" placeholder="Tulis ulasan kamu tentang coklat ini..."
          className="w-full rounded-2xl border border-[#ecd6c8] px-5 py-3 outline-none focus:border-[#8c5a3c]" />
        <button onClick={kirimUlasan} className="mt-4 rounded-full bg-[#8c5a3c] px-8 py-3 font-semibold text-white">Kirim ulasan</button>

        {ulasan.length === 0 ? (
          <p className="mt-5 text-[#7a5a4a]">Belum ada ulasan. Jadilah yang pertama!</p>
        ) : (
          <div className="mt-5 space-y-3">
            {ulasan.map((u, i) => (
              <div key={i} className="rounded-2xl bg-[#f4e9e1] p-4">
                <strong>{u.nama}</strong> <span className="text-[#e0a23c]">{"★".repeat(u.rating)}</span>
                <p>{u.isi}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default ProductDetail;