// Warna batang coklat: t=atas, l=sisi terang, m=sisi kiri, d=sisi gelap, e=bawah, b=ketebalan
export const palet = {
  dark:    { t: "#6a3a27", l: "#8a5640", m: "#4f2a1a", d: "#3a1d11", e: "#2c150b", b: "#22100a" },
  gelap:   { t: "#4a2616", l: "#69402c", m: "#37190d", d: "#2a1209", e: "#1f0d06", b: "#170a04" },
  milk:    { t: "#9a6444", l: "#b8805d", m: "#7a4a31", d: "#5a3422", e: "#4a2b1b", b: "#3b2216" },
  karamel: { t: "#a8714c", l: "#c58d66", m: "#85533a", d: "#643b28", e: "#51301f", b: "#42261a" },
  white:   { t: "#ecd9bd", l: "#f8ecd9", m: "#d6bd96", d: "#bd9f77", e: "#a98b64", b: "#957a56" },
  ruby:    { t: "#c9758f", l: "#e195ab", m: "#aa5c75", d: "#874459", e: "#733a4d", b: "#5f2f40" },
};

export const products = [
  { id: 1, nama: "Dark Chocolate 70%", asal: "Single origin Bali", kategori: "Dark", harga: 25000, stok: 12, palet: "dark", deskripsi: "Coklat hitam dengan kadar kakao 70%, pahit manis yang seimbang." },
  { id: 2, nama: "Dark Chocolate 85%", asal: "Kakao Sulawesi", kategori: "Dark", harga: 32000, stok: 9, palet: "dark", deskripsi: "Rasa kakao pekat dengan sedikit gula, cocok untuk pencinta coklat pahit." },
  { id: 3, nama: "Extra Bitter 100%", asal: "Kakao murni", kategori: "Dark", harga: 38000, stok: 4, palet: "gelap", deskripsi: "Kakao murni tanpa gula tambahan, rasa paling intens." },
  { id: 4, nama: "Milk Chocolate", asal: "Susu segar", kategori: "Milk", harga: 20000, stok: 20, palet: "milk", deskripsi: "Coklat susu lembut yang meleleh di mulut." },
  { id: 5, nama: "Milk Hazelnut", asal: "Hazelnut panggang", kategori: "Milk", harga: 28000, stok: 14, palet: "milk", deskripsi: "Coklat susu dengan potongan hazelnut renyah." },
  { id: 6, nama: "Milk Caramel", asal: "Karamel lumer", kategori: "Milk", harga: 27000, stok: 3, palet: "karamel", deskripsi: "Coklat susu dengan isian karamel yang lumer." },
  { id: 7, nama: "White Chocolate Vanilla", asal: "Vanili Papua", kategori: "White", harga: 24000, stok: 11, palet: "white", deskripsi: "Coklat putih manis dengan aroma vanili alami." },
  { id: 8, nama: "White Chocolate Raspberry", asal: "Rasberry kering", kategori: "White", harga: 29000, stok: 0, palet: "white", deskripsi: "Coklat putih dengan serpihan rasberry yang asam segar." },
  { id: 9, nama: "Ruby Chocolate", asal: "Kakao ruby", kategori: "Spesial", harga: 45000, stok: 6, palet: "ruby", deskripsi: "Coklat merah muda alami dengan rasa buah berry yang segar." },
  { id: 10, nama: "Gianduja", asal: "Hazelnut dan coklat", kategori: "Spesial", harga: 42000, stok: 8, palet: "karamel", deskripsi: "Perpaduan coklat dan pasta hazelnut halus khas Italia." },
  { id: 11, nama: "Choco Almond", asal: "Kebun Jember", kategori: "Spesial", harga: 30000, stok: 0, palet: "dark", deskripsi: "Coklat hitam dengan almond panggang yang renyah." },
  { id: 12, nama: "Praline Hazelnut", asal: "Isi pasta hazelnut", kategori: "Praline", harga: 48000, stok: 10, palet: "milk", deskripsi: "Coklat bonbon dengan isian praline hazelnut yang lembut." },
  { id: 13, nama: "Truffle Dark", asal: "Ganache coklat", kategori: "Praline", harga: 52000, stok: 5, palet: "gelap", deskripsi: "Truffle dengan ganache dark chocolate, dibalut bubuk kakao." },
  { id: 14, nama: "Kuverture Callets", asal: "Untuk baking", kategori: "Kuverture & Bubuk", harga: 60000, stok: 7, palet: "dark", deskripsi: "Butiran coklat kuverture yang mudah dilelehkan untuk kue dan dessert." },
  { id: 15, nama: "Cocoa Powder", asal: "Bubuk kakao murni", kategori: "Kuverture & Bubuk", harga: 35000, stok: 18, palet: "gelap", deskripsi: "Bubuk kakao tanpa gula untuk adonan kue dan minuman." },
];

export const kategori = ["Dark", "Milk", "White", "Spesial", "Praline", "Kuverture & Bubuk"];

export const ukuranList = [
  { label: "50 g", faktor: 1 },
  { label: "100 g", faktor: 1.8 },
];

export const hargaUkuran = (harga, faktor) => Math.round((harga * faktor) / 500) * 500;
export const rupiah = (angka) => "Rp " + angka.toLocaleString("id-ID");