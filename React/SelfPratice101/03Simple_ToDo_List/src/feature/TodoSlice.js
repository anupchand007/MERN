import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [
        {
          id: 0,
          task: "Code some JS and React Program"
        }
      ]
};

const TodoSlice = createSlice({
    name: "Todos",
    initialState,
    reducers:
    {
        addTodo: (state, action) => {
            const addedTodo = {
                id: nanoid(),
                task: action.payload
            }
            state.todo.push(addedTodo)
            localStorage.setItem("todos", JSON.stringify(state.todo));
        },
        removeTodo: (state, action) => {
            state.todo = state.todo.filter((tasks) =>
                tasks.id !== action.payload
            )
            localStorage.setItem("todos", JSON.stringify(state.todo))
        }
    }
})

export const { addTodo, removeTodo } = TodoSlice.actions;

export default TodoSlice.reducer;