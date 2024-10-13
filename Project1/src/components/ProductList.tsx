import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Product } from '../types/Product';
import { setSelectedProduct } from '../features/productSlice';
import { AppDispatch } from '../app/store';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
        console.log('API Response:', response.data); // Log to ensure data format
        setProducts(response.data || []); // Fallback to empty array
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err); // Log error for debugging
        setError('An error occurred while fetching products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product: Product) => {
    dispatch(setSelectedProduct(product));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {Array.isArray(products) ? (
          products.map((product) => (
            <li key={product.id} onClick={() => handleProductClick(product)}>
              {product.title} - ${product.price}
            </li>
          ))
        ) : (
          <div>No products available</div>
        )}
      </ul>
    </div>
  );
};

export default ProductList;

