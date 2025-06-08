import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadTodosFromStorage = () => {
    try {
        const todos = localStorage.getItem("todos");
        return todos ? JSON.parse(todos) : [];
    } catch (error) {
        console.error("Error loading todos from localStorage:", error);
        return [];
    }
};

const saveTodosToStorage = (todos) => {
    try {
        localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
        console.error("Error saving todos to localStorage:", error);
    }
};

const initialState = {
    todo: loadTodosFromStorage()
};

const TodoSlice = createSlice({
    name: "Todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            if (!action.payload || typeof action.payload !== 'string') {
                return;
            }
            const trimmedTask = action.payload.trim();
            if (trimmedTask) {
                const addedTodo = {
                    id: nanoid(),
                    task: trimmedTask,
                    createdAt: new Date().toISOString()
                };
                state.todo.push(addedTodo);
                saveTodosToStorage(state.todo);
            }
        },
        removeTodo: (state, action) => {
            if (!action.payload) return;
            state.todo = state.todo.filter((task) => task.id !== action.payload);
            saveTodosToStorage(state.todo);
        }
    }
});

export const { addTodo, removeTodo } = TodoSlice.actions;

export default TodoSlice.reducer;