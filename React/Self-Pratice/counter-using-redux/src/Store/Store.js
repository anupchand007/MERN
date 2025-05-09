import { configureStore } from '@reduxjs/toolkit';
import  counterReducer  from '../State/CounterSlice';


export const store = configureStore ({
    reducer: counterReducer
})

