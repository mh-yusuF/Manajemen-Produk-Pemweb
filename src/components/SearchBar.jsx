function SearchBar() {
  return (
    <label className="search-box">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m16 16 4 4" />
      </svg>
      <input type="search" placeholder="Cari nama produk..." aria-label="Cari nama produk" />
    </label>
  );
}

export default SearchBar;
