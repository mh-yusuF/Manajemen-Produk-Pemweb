import { useEffect } from 'react';

function formatPrice(price) {
  return `Rp${new Intl.NumberFormat('id-ID').format(price)}`;
}

function DeleteProductModal({ product, onClose, onConfirm }) {
  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="modal-panel delete-modal" role="dialog" aria-modal="true" aria-labelledby="delete-product-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Tutup">×</button>
        <div className="delete-icon" aria-hidden="true">!</div>
        <div className="modal-heading delete-heading">
          <p className="eyebrow">KONFIRMASI</p>
          <h2 id="delete-product-title">Hapus Produk?</h2>
          <p>Produk yang dihapus tidak dapat dikembalikan.</p>
        </div>
        <div className="delete-product-preview">
          <p className="product-id">ID: {product.id}</p>
          <h3>{product.name}</h3>
          <p className="product-price">{formatPrice(product.price)}</p>
        </div>
        <div className="modal-actions">
          <button className="button button-cancel" type="button" onClick={onClose}>Batal</button>
          <button className="button button-delete-confirm" type="button" onClick={onConfirm}>Hapus Produk</button>
        </div>
      </section>
    </div>
  );
}

export default DeleteProductModal;
