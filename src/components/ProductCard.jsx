import { useState } from "react";
import { Link } from "react-router-dom";
import ChocoBar from "./ChocoBar";
import { useCart } from "../context/CartContext";
import { palet, ukuranList, hargaUkuran, rupiah } from "../utils/data";

// Props: produk
function ProductCard({ produk }) {
  const { addToCart } = useCart();
  const [ukuran, setUkuran] = useState(ukuranList[0]);

  const habis = produk.stok === 0;
  const menipis = produk.stok > 0 && produk.stok <= 5;

  return (
    <div className="rounded-3xl border border-[#e6d3c4] bg-[#fffaf6] p-4">
      <div className="relative rounded-2xl bg-[#f3e6da] p-3">
        {/* Conditional rendering: badge stok */}
        {habis && <span className="absolute -right-1 -top-2 rounded-full bg-[#4a3a32] px-3 py-1 text-xs text-white">Habis</span>}
        {menipis && <span className="absolute -right-1 -top-2 rounded-full border border-[#d9c6ba] bg-[#fffaf6] px-3 py-1 text-xs font-bold text-[#6e3f27]">Sisa {produk.stok}</span>}
        <ChocoBar palet={palet[produk.palet]} habis={habis} className="h-32 w-full" />
      </div>

      <h3 className="mt-3 text-center font-serif text-lg font-bold leading-tight">{produk.nama}</h3>
      <p className="text-center text-xs text-[#a8734f]">{produk.kategori} · {produk.asal}</p>

      <div className="my-3 flex justify-center gap-2">
        {ukuranList.map((u) => (
          <button
            key={u.label}
            onClick={() => setUkuran(u)}
            className={
              "rounded-full border px-3 py-1 text-xs " +
              (ukuran.label === u.label ? "border-[#ecd6c8] bg-[#ecd6c8] text-[#6e3f27]" : "border-[#d9c6ba] text-[#7a5a4a]")
            }
          >
            {u.label}
          </button>
        ))}
      </div>

      <p className="text-center text-lg font-extrabold text-[#8c5a3c]">
        {rupiah(hargaUkuran(produk.harga, ukuran.faktor))}
      </p>
      <Link to={`/product/${produk.id}`} className="my-2 block text-center text-sm text-[#8c5a3c]">Lihat Detail</Link>

      <button
        disabled={habis}
        onClick={() => addToCart(produk, ukuran)}
        className="w-full rounded-full bg-[#8c5a3c] py-2.5 font-semibold text-white disabled:cursor-not-allowed disabled:bg-[#e6dcd5] disabled:text-[#7a6a60]"
      >
        {habis ? "Stok habis" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;