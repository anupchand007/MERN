import { configureStore } from "@reduxjs/toolkit";
import ShowReducer from "../Feature/ShowSlice"

const store = configureStore({
    reducer: {
        Message: ShowReducer
    }
})

export default store;