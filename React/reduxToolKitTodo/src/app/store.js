/*steps to create store:
Step1:
    import {configureStore} from '@reduxjs/toolkit';
Step2:
    export const store = configureStore({})
    :It takes object as input

*/

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Feature/Todo/TodoSlice'


export const store = configureStore({
    reducer: todoReducer
})