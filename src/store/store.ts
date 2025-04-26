import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import todoSlice from "../features/todo/todoSlice";
import postSlice from "../features/post/postSlice";


// Создание и конфигурация хранилища
const store = configureStore({
    reducer: {
        user: userSlice,
        todo: todoSlice,
        post: postSlice,
    }
});

export { store }

// ***** TS *****
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch