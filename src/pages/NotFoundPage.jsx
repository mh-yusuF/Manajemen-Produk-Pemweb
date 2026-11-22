import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <main className="page-container">
      <section className="mx-auto max-w-xl rounded-3xl border border-orange-200 bg-orange-50 p-8 text-center shadow-sm sm:p-10">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-orange-700">Error 404</p>
        <h1 className="mb-3 text-4xl font-bold text-emerald-950">Halaman tidak ditemukan</h1>
        <p className="mb-6 text-emerald-800">Alamat yang Anda buka tidak tersedia. Periksa kembali URL atau kembali ke daftar produk.</p>
        <Link className="button button-primary inline-flex items-center justify-center no-underline" to="/">
          Kembali ke produk
        </Link>
      </section>
    </main>
  );
}

export default NotFoundPage;
