function formatPrice(price) {
  return `Rp${new Intl.NumberFormat('id-ID').format(price)}`;
}

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <p className="product-id">ID: {product.id}</p>
      <h2>{product.name}</h2>
      <p className="product-price">{formatPrice(product.price)}</p>
      <div className="card-actions">
        <button className="button button-edit" type="button">Edit</button>
        <button className="button button-delete" type="button">Hapus</button>
      </div>
    </article>
  );
}

export default ProductCard;
