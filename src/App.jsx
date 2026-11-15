import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import ProductList from './components/ProductList.jsx';
import initialProducts from './data/products.js';
import './App.css';

function App() {
  const productCount = initialProducts.length;

  return (
    <main className="page-container">
      <Header />
      <div className="toolbar">
        <SearchBar />
        <p className="count-label">{productCount} produk</p>
      </div>
      <ProductList products={initialProducts} />
      <p className="page-summary">Menampilkan {productCount} dari {productCount} produk</p>
    </main>
  );
}

export default App;
