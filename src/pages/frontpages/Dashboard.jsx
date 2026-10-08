import { useState } from "react";
import Hero from "../../components/Hero";
import ChocoBar from "../../components/ChocoBar";
import ProductCard from "../../components/ProductCard";
import { products, kategori, palet } from "../../utils/data";

function Dashboard() {
  const [pilih, setPilih] = useState("Semua Kategori");
  const [cari, setCari] = useState("");

  const tampil = products.filter(
    (p) =>
      (pilih === "Semua Kategori" || p.kategori === pilih) &&
      p.nama.toLowerCase().includes(cari.toLowerCase())
  );

  const input = "rounded-full border border-[#ecd6c8] bg-white px-6 py-3 outline-none focus:border-[#8c5a3c]";

  return (
    <>
      <Hero
        judul="Coklat batang lembut yang lumer di mulut"
        subjudul="Dark, milk, white, sampai ruby, dicetak berpetak dan siap dipatahkan."
      >
        <ChocoBar palet={palet.dark} className="h-36 w-full" />
      </Hero>

      <div className="my-6 flex gap-4">
        <input value={cari} onChange={(e) => setCari(e.target.value)} placeholder="Cari nama coklat..." className={input + " flex-1"} />
        <select value={pilih} onChange={(e) => setPilih(e.target.value)} className={input}>
          <option>Semua Kategori</option>
          {kategori.map((k) => <option key={k}>{k}</option>)}
        </select>
      </div>

      <h2 className="mb-4 text-3xl font-extrabold text-[#8c5a3c]">
        Daftar Coklat <span className="text-lg font-semibold text-[#a8734f]">({tampil.length} menu)</span>
      </h2>

      {/* Conditional rendering: ada hasil atau tidak */}
      {tampil.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tampil.map((p) => <ProductCard key={p.id} produk={p} />)}
          </div>
          <p className="mt-8 text-center text-sm text-[#7a5a4a]">Menampilkan {tampil.length} dari {products.length} menu</p>
        </>
      ) : (
        <p className="rounded-3xl bg-[#fffaf6] p-10 text-center text-[#7a5a4a]">Coklat tidak ditemukan. Coba kata kunci atau kategori lain.</p>
      )}
    </>
  );
}

export default Dashboard;