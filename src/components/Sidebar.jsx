import { NavLink } from "react-router-dom";

const menu = [
  { to: "/admin/dashboard", label: "Dashboard" },
  { to: "/admin/about", label: "About" },
];

function Sidebar() {
  return (
    <aside className="w-[260px] shrink-0 bg-[#8c5a3c] px-8 py-8 text-[#f6e3d3]">
      <h1 className="mb-10 text-3xl font-extrabold text-[#fffaf6]">My Admin 🍫</h1>
      <nav className="flex flex-col gap-3">
        {menu.map((m) => (
          <NavLink
            key={m.to}
            to={m.to}
            className={({ isActive }) =>
              "rounded-2xl px-6 py-4 text-lg font-semibold " +
              (isActive ? "bg-[#fffaf6] text-[#8c5a3c] shadow-lg" : "text-[#f6e3d3]")
            }
          >
            {m.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;