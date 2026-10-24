// ponytail: data placeholder, ganti langsung di array ini kalau data asli sudah ada
export const petugas = [
  {
    // ponytail: slug wajib tanpa spasi (pakai dash) — spasi bikin URL %20 dan tidak match
    slug: "reihan-achmad-susilo",
    nama: "Reihan Achmad Susilo",
    email: "reihan@gunadarma.ac.id",
    telepon: "0812-3456-7890",
  },
  {
    slug: "bagas pramudya",
    nama: "Bagas Nugroho",
    email: "bagas@gunadarma.ac.id",
    telepon: "0813-3456-7891",
  },
  {
    slug: "Muhammad Afriza Maulana",
    nama: "Muhammad Afriza Maulana",
    email: "",
    telepon: "0815-3456-7892",
  },
  {
    slug: "Reni Febrianti",
    nama: "Reni Febrianti",
    email: "andi.wijaya@gunadarma.ac.id",
    telepon: "0821-3456-7893",
  },
  {
    slug: "Nanda Tazkia Zahra",
    nama: "Nanda Tazkia Zahra",
    email: "dewi.lestari@gunadarma.ac.id",
    telepon: "0857-3456-7894",
  },
  {
    slug: "Muzdalifah Aliah",
    nama: "Budi Santoso",
    email: "budi.santoso@gunadarma.ac.id",
    telepon: "0878-3456-7895",
  },
];

export type Petugas = (typeof petugas)[number];

export const getPetugas = (slug: string) =>
  petugas.find((p) => p.slug === slug);

export function inisial(nama: string) {
  return nama
    .split(" ")
    .slice(0, 2)
    .map((k) => k[0])
    .join("")
    .toUpperCase();
}
