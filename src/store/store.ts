import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import todoSlice from "../features/todo/todoSlice";


// Создание и конфигурация хранилища
const store = configureStore({
    reducer: {
        user: userSlice,
        todo: todoSlice,
    }
});

export { store }