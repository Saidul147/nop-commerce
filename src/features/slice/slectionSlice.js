import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    processor:0,
    ram:0,
    hdd:0,
    os:0,
    software:[],
}

const selectionSlice = createSlice({
    name:'selection',
    initialState,
    reducers:{
        setSelection:(state,action) => {
            const {catagory,price} = action.payload;
            state[catagory] = Number(price)
        },
        toggleSoftware:(state,action) => {
            const {price,checked} = action.payload;
            if(checked){
                state.software.push(Number(price))
            }else{
                state.software = state.software.filter((p) => p !== Number(price))
            }
        }
    }
})

export const {setSelection,toggleSoftware} = selectionSlice.actions  
export default selectionSlice.reducer