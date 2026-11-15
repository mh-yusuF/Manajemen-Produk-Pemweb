import { useState } from 'react';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import ProductList from './components/ProductList.jsx';
import AddProductModal from './components/AddProductModal.jsx';
import initialProducts from './data/products.js';
import './App.css';

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );

  function handleAddProduct(productDetails) {
    const nextId = products.length > 0 ? Math.max(...products.map((product) => product.id)) + 1 : 1;
    setProducts((currentProducts) => [...currentProducts, { id: nextId, ...productDetails }]);
    setIsAddModalOpen(false);
  }

  return (
    <main className="page-container">
      <Header onAddProduct={() => setIsAddModalOpen(true)} />
      <div className="toolbar">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <p className="count-label">{products.length} produk</p>
      </div>
      <ProductList products={visibleProducts} />
      <p className="page-summary">Menampilkan {visibleProducts.length} dari {products.length} produk</p>
      {isAddModalOpen && (
        <AddProductModal
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleAddProduct}
        />
      )}
    </main>
  );
}

export default App;
