import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    msg: "Hello This is a message form Anup Chand",
    isVisible: true
}

const ShowSlice = createSlice({
    name: "Message",
    initialState,
    reducers: {
        Toggle: (state) => {
            state.msg;
            state.isVisible = !state.isVisible
        },

    }
})

export const { Toggle } = ShowSlice.actions;

export default ShowSlice.reducer;