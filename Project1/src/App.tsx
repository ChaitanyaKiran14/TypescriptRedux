import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { RootState } from './app/store';

const App: React.FC = () => {
  const selectedProduct = useSelector((state: RootState) => state.product.selectedProduct);

  return (
    <div className="App">
      <h1>My React Store</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <ProductList />
        </div>
        <div style={{ flex: 1 }}>
          {selectedProduct && <ProductDetail />}
        </div>
      </div>
    </div>
  );
};

export default App;