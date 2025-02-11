import { configureStore } from "@reduxjs/toolkit";
import mySelection from '../slice/slectionSlice'

const store = configureStore({
    reducer:{
        selection:mySelection,
    }
})

export default store;