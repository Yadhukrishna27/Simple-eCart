import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import wishSlice from "./wishSlice";
import cartSlice from "./cartSlice";


const productStore = configureStore({
    reducer: {
        productReducer:productSlice,
        wishReducer: wishSlice, 
        cartReducer: cartSlice
        
    },

})

export default productStore;