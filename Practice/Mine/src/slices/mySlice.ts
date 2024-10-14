import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../Types/prodType";


interface ProductState {
    selectedProduct : Product | null;

}

const initialState  : ProductState = {
    selectedProduct :   null,
}


const productSlice = createSlice({
    name : "Product",
    initialState,
    reducers : {
        setSelectedProduct : (state, action: PayloadAction<Product>) => {
            state.selectedProduct = action.payload
        }
    }

})
export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
