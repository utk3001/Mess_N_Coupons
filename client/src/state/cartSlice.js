import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
 }

export const cartSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        add:(state, action) => {
            state.user = action.payload.others
            state.token = action.payload.token
        },
        edit:(state, action) => {
            state.user = action.payload.others
            state.token = action.payload.token
        },
        remove:(state, action) => {
            state.user = action.payload.others
            state.token = action.payload.token
        },
        getOne:(state, action) => {
            state.user = action.payload.others
            state.token = action.payload.token
        }
    }
})

export const {add, edit, remove,getOne} = cartSlice.actions

export default cartSlice.reducer