import ProductCard from './ProductCard.jsx';

function ProductList({ products, onEdit, onDelete }) {
  if (products.length === 0) {
    return <p className="empty-state">Produk tidak ditemukan.</p>;
  }

  return (
    <section className="product-grid" aria-label="Daftar produk">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </section>
  );
}

export default ProductList;
