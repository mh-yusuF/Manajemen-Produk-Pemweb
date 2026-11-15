import { useState } from 'react';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import ProductList from './components/ProductList.jsx';
import initialProducts from './data/products.js';
import './App.css';

function App() {
  const [products] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );

  return (
    <main className="page-container">
      <Header />
      <div className="toolbar">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <p className="count-label">{products.length} produk</p>
      </div>
      <ProductList products={visibleProducts} />
      <p className="page-summary">Menampilkan {visibleProducts.length} dari {products.length} produk</p>
    </main>
  );
}

export default App;
