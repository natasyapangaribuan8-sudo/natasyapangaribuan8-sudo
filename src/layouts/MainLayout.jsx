import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f4e9e1] text-[#3a2014]">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-8">
        <Outlet />
      </main>
      <footer className="bg-[#8c5a3c] py-4 text-center text-[#fffaf6]">© 2026 Toko Coklat | Version 1.0</footer>
    </div>
  );
}

export default MainLayout;