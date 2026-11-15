import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import ProductList from './components/ProductList.jsx';
import './App.css';

const initialProducts = [
  { id: 1, name: 'Pulpen', price: 5000 },
  { id: 2, name: 'Buku Tulis', price: 12000 },
  { id: 3, name: 'Spidol', price: 8000 },
  { id: 4, name: 'Penggaris', price: 6000 },
  { id: 5, name: 'Penghapus', price: 3000 },
];

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
