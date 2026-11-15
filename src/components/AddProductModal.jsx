import { useEffect, useState } from 'react';

function AddProductModal({ onClose, onSave }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
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
      <section className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="add-product-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Tutup">×</button>
        <div className="modal-heading">
          <p className="eyebrow">PRODUK BARU</p>
          <h2 id="add-product-title">Tambah Produk</h2>
          <p>Masukkan informasi produk yang ingin ditambahkan.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="form-field">
            <span>Nama Produk</span>
            <input autoFocus value={name} onChange={(event) => setName(event.target.value)} placeholder="Contoh: Pulpen" />
          </label>
          <label className="form-field">
            <span>Harga (Rp)</span>
            <input type="number" min="1" step="1" value={price} onChange={(event) => setPrice(event.target.value)} placeholder="Contoh: 5000" />
            <small>Harga harus lebih dari 0.</small>
          </label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <div className="modal-actions">
            <button className="button button-cancel" type="button" onClick={onClose}>Batal</button>
            <button className="button button-primary" type="submit">Simpan Produk</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddProductModal;
