import { useEffect, useState } from 'react';

function EditProductModal({ product, onClose, onSave }) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(String(product.price));
  const [error, setError] = useState('');

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [onClose]);

  function handleSubmit(event) {
    event.preventDefault();
    const cleanName = name.trim();
    const numericPrice = Number(price);

    if (!cleanName || !Number.isFinite(numericPrice) || numericPrice <= 0) {
      setError('Isi nama produk dan masukkan harga lebih dari 0.');
      return;
    }

    onSave({ name: cleanName, price: numericPrice });
  }

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="edit-product-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Tutup">×</button>
        <div className="modal-heading">
          <p className="eyebrow">PERBARUI INVENTARIS</p>
          <h2 id="edit-product-title">Edit Produk</h2>
          <p>ID produk: {product.id}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="form-field">
            <span>Nama Produk</span>
            <input autoFocus value={name} onChange={(event) => setName(event.target.value)} />
          </label>
          <label className="form-field">
            <span>Harga (Rp)</span>
            <input type="number" min="1" step="1" value={price} onChange={(event) => setPrice(event.target.value)} />
            <small>Harga harus lebih dari 0.</small>
          </label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <div className="modal-actions">
            <button className="button button-cancel" type="button" onClick={onClose}>Batal</button>
            <button className="button button-primary" type="submit">Simpan Perubahan</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default EditProductModal;
