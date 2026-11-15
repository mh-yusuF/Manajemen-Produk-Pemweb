import ProductCard from './ProductCard.jsx';

function ProductList({ products }) {
  return (
    <section className="product-grid" aria-label="Daftar produk">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductList;
