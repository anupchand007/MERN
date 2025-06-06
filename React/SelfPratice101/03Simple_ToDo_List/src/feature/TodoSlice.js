import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo: [{
        id: nanoid,
        task: "Code some JS and React Program"
    }]
}

const TodoSlice = createSlice({
    name: "Todos",
    initialState,
    reducers:
    {
        addTodo: (state, action) => {
                const addedTodo = {
                    id: nanoid,
                    task: action.payload()
                }
                state.todo.push(addedTodo)
                localStorage.setItem("todos", JSON.stringify(state.todo));
                localStorage.getItem(JSON.parse(state.todo));
        },
        removeTodo:(state, action) => {
            state.todo = state.todo.filter((tasks) =>
            tasks.id !== action.payload
            )
        }
    }
})

export const {addTodo, removeTodo} = TodoSlice.actions;

export default TodoSlice.reducer;