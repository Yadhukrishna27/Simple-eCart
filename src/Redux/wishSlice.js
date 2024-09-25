import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const wishSlice=createSlice({
    name:"wishlist",
    initialState:{
        items:[]
    },
    reducers:{
        addToWishList(state,action){
            const existing = state.items.find(item => item.id == action.payload.id)
            if(existing) {
            toast.warning("item alredy added to wishList!!!")

        }
        else {
            state.items.push(action.payload)
            toast.success("item added to wishList!!!")
        }
    },

        removeFromWishList(state,action){
            state.items=state.items.filter(item=>item.id!=action.payload)
        }
    
    }
})

export default wishSlice.reducer
export const {addToWishList,removeFromWishList}=wishSlice.actions