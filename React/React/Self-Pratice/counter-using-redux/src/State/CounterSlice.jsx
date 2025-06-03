import  { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    id: nanoid,
    value: 0 
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state )=> {
            state.id = nanoid;
            state.value += 1;
        },
        incrementByValue: (state, action) => {
            state.id = nanoid;
            state.value += action.payload
        },
        decrement: (state )=> {
            state.id = nanoid;
            state.value -= 1;
        },
        decrementByValue: (state, action) => {
            state.id = nanoid;
            state.value -= action.payload
        }
    }
})

export const {increment, incrementByValue, decrement, decrementByValue} = counterSlice.actions

export default counterSlice.reducer;