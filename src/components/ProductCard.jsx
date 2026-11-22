import { Link } from 'react-router-dom';

function formatPrice(price) {
  return `Rp${new Intl.NumberFormat('id-ID').format(price)}`;
}

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <article className="product-card">
      <p className="product-id">ID: {product.id}</p>
      <h2><Link className="product-detail-link" to={`/product/${product.id}`}>{product.name}</Link></h2>
      <p className="product-price">{formatPrice(product.price)}</p>
      <Link className="product-detail-link" to={`/product/${product.id}`}>Lihat detail →</Link>
      <div className="card-actions">
        <button className="button button-edit" onClick={() => onEdit?.(product)} type="button">Edit</button>
        <button className="button button-delete" onClick={() => onDelete?.(product)} type="button">Hapus</button>
      </div>
    </article>
  );
}

export default ProductCard;
