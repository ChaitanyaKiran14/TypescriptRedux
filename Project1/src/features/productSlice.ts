import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/Product';

interface ProductState {
  selectedProduct: Product | null;
}

const initialState: ProductState = {
  selectedProduct: null,
};


const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<Product>) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;