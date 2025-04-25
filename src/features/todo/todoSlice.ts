import { createSlice } from "@reduxjs/toolkit";

// TS
import type { PayloadAction } from '@reduxjs/toolkit'
// TS
export interface ITodo {
    id: string;
    text: string;
    completed: boolean;
}

export interface ITodoState {
    todoArr: ITodo[]
}


const initialState: ITodoState = {
    todoArr: [],
}

// Slice
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodoReducer: (state, action: PayloadAction<ITodo>) => {
            state.todoArr.push(action.payload);
        },
        toggleCompletedTodoReducer: (state, action: PayloadAction<string>) => {
            const toggleTodo = state.todoArr.find((item) => (item.id === action.payload))
            if (toggleTodo) {
                toggleTodo.completed = !toggleTodo.completed;
            }
        },
        removeTodoReducer: (state, action: PayloadAction<string>) => {
            state.todoArr = state.todoArr.filter((item) => (item.id !== action.payload));
        },
    }
});

// Reducers
const addTodoReducer = todoSlice.actions.addTodoReducer;
const toggleCompletedTodoReducer = todoSlice.actions.toggleCompletedTodoReducer;
const removeTodoReducer = todoSlice.actions.removeTodoReducer;

export { todoSlice, addTodoReducer, toggleCompletedTodoReducer, removeTodoReducer }
export default todoSlice.reducer