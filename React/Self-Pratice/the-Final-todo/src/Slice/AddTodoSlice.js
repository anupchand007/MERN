import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        task: "Coding Something"
    }]
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const task = {
                id: nanoid(),
                task: action.payload
            }
            state.todos.push(task)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload
            )
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer