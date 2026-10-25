// ponytail: data placeholder, ganti langsung di array ini kalau data asli sudah ada
const daftarPetugas = [
  {
    nama: "Reihan Achmad Susilo",
    email: "reihanachmadsusilo@student.gunadarma.ac.id",
    telepon: "0895-3831-16665",
  },
  {
    nama: "Bagas Pramudya",
    email: "bagaspramudya@student.gunadarma.ac.id",
    telepon: "0852-8170-1342",
  },
  {
    nama: "Muhammad Afriza Maulana",
    email: "muhammadafrizamaulana@student.gunadarma.ac.id",
    telepon: "0857-8115-5552",
  },
  {
    nama: "Reni Febrianti",
    email: "renifebrianti@student.gunadarma.ac.id",
    telepon: "0838-0427-7617",
  },
  {
    nama: "Nanda Tazkia Zahra",
    email: "nandatazkiazahra@student.gunadarma.ac.id",
    telepon: "0857-8284-9370",
  },
  {
    nama: "Muzdalifah Aliah",
    email: "muzdalifahaliah@student.gunadarma.ac.id",
    telepon: "0857-8888-5779",
  },
  {
    nama: "Hanum Adya Sekar Pertiwi",
    email: "hanumadyasekarpertiwi@student.gunadarma.ac.id",
    telepon: "0855-8874-633",
  },
  {
    nama: "Dio Andima",
    email: "dioandima@student.gunadarma.ac.id",
    telepon: "0895-1270-6241",
  },
  {
    nama: "Achmad Zaenuddin Dani",
    email: "achmadzaenuddindani@student.gunadarma.ac.id",
    telepon: "0878-3456-7895",
  },
  {
    nama: "Nadiya",
    email: "nadiya@student.gunadarma.ac.id",
    telepon: "0851-5771-4896",
  },
];

// ponytail: slug otomatis dari nama — spasi jadi dash, huruf kecil, tanpa field slug manual
export function slugify(nama: string) {
  return nama
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const petugas = daftarPetugas.map((p) => ({
  ...p,
  slug: slugify(p.nama),
}));

export type Petugas = (typeof petugas)[number];

export const getPetugas = (slug: string) =>
  petugas.find((p) => p.slug === slugify(slug));

export function inisial(nama: string) {
  return nama
    .split(" ")
    .slice(0, 2)
    .map((k) => k[0])
    .join("")
    .toUpperCase();
}
