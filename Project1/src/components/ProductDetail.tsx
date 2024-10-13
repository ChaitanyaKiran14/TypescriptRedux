import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const ProductDetail: React.FC = () => {
  const product = useSelector((state: RootState) => state.product.selectedProduct);

  if (!product) return <div>No product selected</div>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
      <img src={product.image} alt={product.title} style={{maxWidth: '200px'}} />
    </div>
  );
};

export default ProductDetail;