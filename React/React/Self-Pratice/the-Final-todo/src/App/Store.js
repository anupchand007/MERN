import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "../Slice/ThemeSlice"
import todoReducer from '../Slice/AddTodoSlice'

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        theme: themeReducer,
    }
})