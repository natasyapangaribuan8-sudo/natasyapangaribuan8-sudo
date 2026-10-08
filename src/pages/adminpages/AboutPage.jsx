import { useUser } from "../../context/UserContext";

function AboutPage() {
  const { nama } = useUser();
  return (
    <>
      <h2 className="mb-4 text-3xl font-extrabold">About</h2>
      <div className="rounded-3xl bg-[#fffaf6] p-8 shadow-md">
        <p className="text-lg">Welcome to the admin About Page!</p>
        <p className="mt-3 leading-relaxed text-[#7a5a4a]">
          Toko Coklat adalah prototipe e-commerce coklat dengan 15 menu dari 6 jenis:
          Dark, Milk, White, Spesial, Praline, dan Kuverture & Bubuk. Dibuat oleh {nama} menggunakan React.
        </p>
      </div>
    </>
  );
}

export default AboutPage;