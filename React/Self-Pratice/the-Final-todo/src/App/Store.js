import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "../Slice/ThemeSlice"

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    }
})