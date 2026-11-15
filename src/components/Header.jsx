function Header() {
  return (
    <header className="page-header">
      <div>
        <h1>Manajemen Produk</h1>
        <p>Kelola daftar produk dan harga dalam satu tempat.</p>
      </div>
      <button className="button button-primary" type="button">
        <span aria-hidden="true">+</span> Tambah Produk
      </button>
    </header>
  );
}

export default Header;
