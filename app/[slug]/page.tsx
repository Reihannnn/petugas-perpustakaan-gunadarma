import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { petugas, getPetugas, inisial } from "../data";

export function generateStaticParams() {
  return petugas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getPetugas(slug);
  if (!p) return { title: "Petugas tidak ditemukan" };
  return { title: `${p.nama} — Petugas Perpustakaan Gunadarma` };
}

export default async function ProfilPetugas({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const p = getPetugas(slug);
  if (!p) notFound();

  return (
    <div className="min-h-full bg-white font-sans">
      <header className="bg-primary text-white">
        <div className="mx-auto max-w-3xl px-5 pt-2 pb-10 sm:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="text-sm font-medium opacity-80 transition hover:opacity-100"
            >
              ← Kembali ke daftar petugas
            </Link>
            <Image
              src="/images/guandarma-logo.png"
              alt="Logo Universitas Gunadarma"
              width={100}
              height={100}
              className="h-18 w-auto shrink-0 rounded-md p-0.5"
            />
          </div>
          <div className="mt-6 flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-white text-3xl font-bold text-primary">
              {inisial(p.nama)}
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase opacity-80">
                Petugas Perpustakaan
              </p>
              <h1 className="mt-1 text-2xl font-bold sm:text-3xl">{p.nama}</h1>
              <p className="text-sm opacity-80">Universitas Gunadarma</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-8 sm:px-8">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
          {[
            { label: "Nama Lengkap", nilai: p.nama },
            { label: "Email", nilai: p.email, href: `mailto:${p.email}` },
            {
              label: "No. Telepon",
              nilai: p.telepon,
              // ponytail: 08xx -> 62xx untuk link tel/whatsapp
              href: `tel:${p.telepon.replace(/-/g, "").replace(/^0/, "+62")}`,
            },
          ].map((row, i) => (
            <div
              key={row.label}
              className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between ${
                i > 0 ? "border-t border-zinc-100" : ""
              }`}
            >
              <span className="text-sm text-zinc-500">{row.label}</span>
              {row.href ? (
                <a
                  href={row.href}
                  className="font-medium text-primary hover:underline"
                >
                  {row.nilai}
                </a>
              ) : (
                <span className="font-medium text-zinc-900">{row.nilai}</span>
              )}
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-zinc-100 py-6 text-center text-xs text-zinc-400">
        Perpustakaan Universitas Gunadarma
      </footer>
    </div>
  );
}
