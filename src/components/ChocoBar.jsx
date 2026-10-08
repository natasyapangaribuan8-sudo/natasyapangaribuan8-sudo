const warnaHabis = { t: "#c4b2a6", l: "#d8cbc1", m: "#ab988b", d: "#93806f", e: "#85736a", b: "#74635a" };

function Tile({ x, y, c }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="40" height="40" fill={c.d} />
      <polygon points="0,0 40,0 33,7 7,7" fill={c.l} />
      <polygon points="0,0 7,7 7,33 0,40" fill={c.m} />
      <polygon points="40,0 40,40 33,33 33,7" fill={c.d} />
      <polygon points="0,40 40,40 33,33 7,33" fill={c.e} />
      <rect x="7" y="7" width="26" height="26" fill={c.t} />
      <polyline points="9,31 9,9 31,9" fill="none" stroke="#fff" strokeWidth="1.2" opacity=".3" />
    </g>
  );
}

// Props: palet (objek warna), habis (true = abu-abu), className
function ChocoBar({ palet, habis = false, className = "" }) {
  const c = habis ? warnaHabis : palet;
  const kolom = [0, 42, 84, 126];
  const baris = [0, 42, 84];

  return (
    <svg viewBox="0 0 200 180" className={className} role="img" aria-label="Coklat batang">
      <g transform="translate(4 42) rotate(-12)">
        <rect x="-3" y="2" width="172" height="130" rx="4" fill={c.b} />
        <rect x="-3" y="-3" width="172" height="130" rx="4" fill={c.e} />
        {baris.map((y) => kolom.map((x) => <Tile key={`${x}-${y}`} x={x} y={y} c={c} />))}
      </g>
    </svg>
  );
}

export default ChocoBar;