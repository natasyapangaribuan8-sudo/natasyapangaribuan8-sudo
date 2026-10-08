// Props: label, value, warna (kelas warna teks angka)
function StatCard({ label, value, warna = "text-[#3a2014]" }) {
  return (
    <div className="rounded-2xl bg-[#fffaf6] p-5 shadow-md">
      <p className="text-sm text-[#7a5a4a]">{label}</p>
      <p className={"text-3xl font-bold " + warna}>{value}</p>
    </div>
  );
}

export default StatCard;