import { configureStore} from "@reduxjs/toolkit";
import TodoReducer from "../feature/TodoSlice"

const Store = configureStore(
    {
        reducer: {
            Todos: TodoReducer
        }
    }
)

