import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import initialProducts from './data/products.js';

function App() {
  const [products, setProducts] = useState(initialProducts);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductPage products={products} setProducts={setProducts} />} />
        <Route path="/product/:id" element={<ProductDetailPage products={products} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
