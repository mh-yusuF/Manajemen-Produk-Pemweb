import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import ProductList from './components/ProductList.jsx';
import products from './data/products.js';
import './App.css';

function App() {
  const productCount = products.length;

  return (
    <main className="page-container">
      <Header />
      <div className="toolbar">
        <SearchBar />
        <p className="count-label">{productCount} produk</p>
      </div>
      <ProductList products={products} />
      <p className="page-summary">Menampilkan {productCount} dari {productCount} produk</p>
    </main>
  );
}

export default App;
