import Image from "next/image";
import Link from "next/link";
import { petugas, inisial } from "./data";

export default function Home() {
  return (
    <div className="min-h-full bg-white font-sans">
      <header className="bg-primary text-white">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-2 sm:px-8">
          <Image
            src="/images/guandarma-logo.png"
            alt="Logo Universitas Gunadarma"
            width={100}
            height={100}
            className="h-32 w-auto shrink-0 bg-primary rounded-lg p-1"
          />
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase opacity-80">
              Universitas Gunadarma
            </p>
            <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
              Daftar Petugas Perpustakaan
            </h1>
            <p className="mt-1 text-sm opacity-80">
              {petugas.length} petugas — klik kartu untuk melihat profil
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {petugas.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                {inisial(p.nama)}
              </div>
              <div className="min-w-0">
                <h2 className="truncate font-semibold text-zinc-900">
                  {p.nama}
                </h2>
                <p className="truncate text-sm text-zinc-500">{p.email}</p>
                <p className="text-sm text-zinc-500">{p.telepon}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-zinc-100 py-6 text-center text-xs text-zinc-400">
        Perpustakaan Universitas Gunadarma
      </footer>
    </div>
  );
}
