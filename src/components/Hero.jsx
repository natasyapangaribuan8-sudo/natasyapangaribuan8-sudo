// Props: judul, subjudul, children (gambar di sisi kanan)
function Hero({ judul, subjudul, children }) {
  return (
    <section className="flex flex-col items-center gap-6 rounded-3xl border border-[#e6d3c4] bg-[#fffaf6] p-8 md:flex-row">
      <div className="flex-1">
        <h1 className="font-serif text-3xl font-bold leading-tight text-[#6e3f27] md:text-4xl">{judul}</h1>
        <p className="mt-3 text-[#7a5a4a]">{subjudul}</p>
      </div>
      {/* Conditional rendering: gambar tampil hanya jika ada children */}
      {children && <div className="w-full rounded-2xl bg-[#f3e6da] p-3 md:w-72">{children}</div>}
    </section>
  );
}

export default Hero;