import { Link, useParams } from 'react-router-dom';

function formatPrice(price) {
  return `Rp${new Intl.NumberFormat('id-ID').format(price)}`;
}

function ProductDetailPage({ products }) {
  const { id } = useParams();
  const product = products.find((item) => String(item.id) === id);

  if (!product) {
    return (
      <main className="page-container">
        <section className="mx-auto max-w-xl rounded-3xl border border-emerald-200 bg-white p-8 text-center shadow-sm">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-orange-700">Produk tidak ditemukan</p>
          <h1 className="mb-3 text-3xl font-bold text-emerald-950">ID produk {id} tidak tersedia</h1>
          <p className="mb-6 text-emerald-800">Produk mungkin sudah dihapus atau alamat yang dibuka tidak valid.</p>
          <Link className="button button-primary inline-flex items-center justify-center no-underline" to="/">
            Kembali ke produk
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-container">
      <Link className="mb-6 inline-flex font-bold text-emerald-800 underline-offset-4 hover:underline" to="/">
        ← Kembali ke produk
      </Link>
      <article className="mx-auto max-w-2xl rounded-3xl border border-emerald-200 bg-white p-7 shadow-sm sm:p-10">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-700">Detail Produk</p>
        <p className="mb-2 text-sm text-emerald-700">ID: {product.id}</p>
        <h1 className="mb-5 text-4xl font-bold text-emerald-950">{product.name}</h1>
        <div className="rounded-2xl bg-emerald-50 p-5">
          <p className="mb-1 text-sm text-emerald-700">Harga</p>
          <p className="text-3xl font-bold text-orange-700">{formatPrice(product.price)}</p>
        </div>
        <Link className="button button-primary mt-7 inline-flex items-center justify-center no-underline" to="/">
          Kembali ke produk
        </Link>
      </article>
    </main>
  );
}

export default ProductDetailPage;
