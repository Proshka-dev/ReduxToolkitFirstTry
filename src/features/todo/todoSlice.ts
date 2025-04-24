import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoArr: [],
}

// Slice
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoArr.push(action.payload);
        },
        toggleCompletedTodo: (state, action) => {
            const toggleTodo = state.todoArr.find((item) => (item.id === action.payload))
            toggleTodo.completed = !toggleTodo.completed;
        },
        removeTodo: (state, action) => {
            state.todoArr = state.todoArr.filter((item) => (item.id !== action.payload));
        },
    }
});

// Action
const addTodoAction = todoSlice.actions.addTodo;
const toggleCompletedTodo = todoSlice.actions.toggleCompletedTodo;
const removeTodo = todoSlice.actions.removeTodo;

export { todoSlice, addTodoAction, toggleCompletedTodo, removeTodo }
export default todoSlice.reducer