import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { totalItem } = useCart();

  const kelas = ({ isActive }) =>
    "rounded-full px-4 py-2 font-semibold " +
    (isActive ? "bg-[#fffaf6] text-[#8c5a3c]" : "text-[#fffaf6]");

  return (
    <header className="border-b-4 border-[#e0b48f] bg-[#8c5a3c]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="text-2xl font-extrabold text-[#fffaf6]">🍫 Toko Coklat</Link>
        <nav className="flex items-center gap-1">
          <NavLink to="/" end className={kelas}>Home</NavLink>
          <NavLink to="/cart" className={kelas}>
            Keranjang
            {/* Conditional rendering: badge hanya jika ada isi */}
            {totalItem > 0 && (
              <span className="ml-2 rounded-full bg-[#e0b48f] px-2 py-0.5 text-sm text-[#4a2616]">{totalItem}</span>
            )}
          </NavLink>
          <NavLink to="/checkout" className={kelas}>Checkout</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;