import { useState } from "react";
import StatCard from "../../components/StatCard";
import { products, palet, rupiah } from "../../utils/data";

function AdminDashboard() {
  const [filter, setFilter] = useState("semua");

  const menipis = products.filter((p) => p.stok > 0 && p.stok <= 5).length;
  const habis = products.filter((p) => p.stok === 0).length;

  const baris = products
    .filter((p) =>
      filter === "semua" ? true : filter === "habis" ? p.stok === 0 : p.stok > 0 && p.stok <= 5
    )
    .sort((a, b) => a.stok - b.stok);

  const chip = (k) =>
    "rounded-full px-4 py-1 text-sm font-semibold " +
    (filter === k ? "bg-[#8c5a3c] text-white" : "bg-[#ecd6c8] text-[#3a2014]");

  return (
    <>
      <section className="rounded-3xl bg-[#8c5a3c] p-8 text-[#fffaf6]">
        <h3 className="text-3xl font-extrabold">Admin Dashboard Toko Coklat</h3>
        <p className="mt-1 text-[#f3dccb]">Pantau stok dan pesanan coklat dengan mudah di sini.</p>
      </section>

      <section className="my-6 grid gap-4 sm:grid-cols-3">
        <StatCard label="Total menu" value={products.length} />
        <StatCard label="Stok menipis" value={menipis} warna="text-[#8c5a3c]" />
        <StatCard label="Stok habis" value={habis} warna="text-red-700" />
      </section>

      <section className="rounded-3xl bg-[#fffaf6] p-6 shadow-md">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-xl font-bold text-[#8c5a3c]">Stok coklat</h4>
          <div className="flex gap-2">
            <button className={chip("semua")} onClick={() => setFilter("semua")}>Semua</button>
            <button className={chip("menipis")} onClick={() => setFilter("menipis")}>Menipis</button>
            <button className={chip("habis")} onClick={() => setFilter("habis")}>Habis</button>
          </div>
        </div>

        {/* Conditional rendering: tabel atau pesan kosong */}
        {baris.length === 0 ? (
          <p className="py-6 text-center text-[#7a5a4a]">Tidak ada menu di kategori ini.</p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="text-[#7a5a4a]">
              <tr><th className="py-2">Menu</th><th>Jenis</th><th>Harga</th><th>Stok</th></tr>
            </thead>
            <tbody>
              {baris.map((p) => (
                <tr key={p.id} className="border-t border-[#ecd6c8]">
                  <td className="py-2">
                    <span className="mr-2 inline-block h-3 w-3 rounded-sm" style={{ background: palet[p.palet].t }} />
                    {p.nama}
                  </td>
                  <td>{p.kategori}</td>
                  <td>{rupiah(p.harga)}</td>
                  <td>
                    {p.stok === 0 ? (
                      <span className="rounded-full bg-red-100 px-3 py-0.5 text-xs text-red-800">Habis</span>
                    ) : p.stok <= 5 ? (
                      <span className="rounded-full bg-amber-100 px-3 py-0.5 text-xs text-amber-800">Sisa {p.stok}</span>
                    ) : (
                      p.stok
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </>
  );
}

export default AdminDashboard;