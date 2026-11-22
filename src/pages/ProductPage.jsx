import { useState } from 'react';
import Header from '../components/Header.jsx';
import SearchBar from '../components/SearchBar.jsx';
import ProductList from '../components/ProductList.jsx';
import AddProductModal from '../components/AddProductModal.jsx';
import EditProductModal from '../components/EditProductModal.jsx';
import DeleteProductModal from '../components/DeleteProductModal.jsx';
import '../App.css';

function ProductPage({ products, setProducts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);
  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );

  function handleAddProduct(productDetails) {
    setProducts((currentProducts) => {
      const nextId = currentProducts.length > 0
        ? Math.max(...currentProducts.map((product) => product.id)) + 1
        : 1;
      return [...currentProducts, { id: nextId, ...productDetails }];
    });
    setIsAddModalOpen(false);
  }

  function handleEditProduct(productDetails) {
    setProducts((currentProducts) => currentProducts.map((product) =>
      product.id === productToEdit.id ? { ...product, ...productDetails } : product,
    ));
    setProductToEdit(null);
  }

  function handleDeleteProduct() {
    setProducts((currentProducts) => currentProducts.filter((product) => product.id !== productToDelete.id));
    setProductToDelete(null);
  }

  return (
    <main className="page-container">
      <Header onAddProduct={() => setIsAddModalOpen(true)} />
      <div className="toolbar">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <p className="count-label">{products.length} produk</p>
      </div>
      <ProductList products={visibleProducts} onEdit={setProductToEdit} onDelete={setProductToDelete} />
      <p className="page-summary">Menampilkan {visibleProducts.length} dari {products.length} produk</p>
      {isAddModalOpen && (
        <AddProductModal onClose={() => setIsAddModalOpen(false)} onSave={handleAddProduct} />
      )}
      {productToEdit && (
        <EditProductModal
          product={productToEdit}
          onClose={() => setProductToEdit(null)}
          onSave={handleEditProduct}
        />
      )}
      {productToDelete && (
        <DeleteProductModal
          product={productToDelete}
          onClose={() => setProductToDelete(null)}
          onConfirm={handleDeleteProduct}
        />
      )}
    </main>
  );
}

export default ProductPage;
