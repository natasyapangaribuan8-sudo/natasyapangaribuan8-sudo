import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { UserProvider, useUser } from "../context/UserContext";

function Header() {
  const { nama } = useUser(); // useContext
  return (
    <header className="flex items-center justify-between border-b-4 border-[#74482f] bg-[#fffaf6] px-10 py-5">
      <div>
        <h2 className="text-2xl font-extrabold text-[#8c5a3c]">My Admin</h2>
        <p className="text-[#7a5a4a]">Kelola data toko coklat kamu</p>
      </div>
      <div className="flex items-center gap-4 text-lg font-semibold">
        Halo, {nama} 👋
        <div className="grid h-14 w-14 place-items-center rounded-full bg-[#8c5a3c] text-2xl font-extrabold text-white">
          {nama.charAt(0)}
        </div>
      </div>
    </header>
  );
}

function AdminLayout() {
  return (
    <UserProvider>
      <div className="flex min-h-screen bg-[#f4e9e1] text-[#3a2014]">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <Header />
          <main className="flex-1 p-10"><Outlet /></main>
          <footer className="border-t border-[#ecd6c8] bg-[#fffaf6] py-4 text-center text-[#7a5a4a]">
            © 2026 My Admin App — v1.0.0
          </footer>
        </div>
      </div>
    </UserProvider>
  );
}

export default AdminLayout;