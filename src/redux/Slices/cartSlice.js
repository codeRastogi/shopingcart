import { createSlice } from "@reduxjs/toolkit";



export const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers : {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id)
        },
        clearCart: (state) =>{
            return [];
        }
    },
})

export const {add, remove, clearCart} = CartSlice.actions;

export default CartSlice.reducer;