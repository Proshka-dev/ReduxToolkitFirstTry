import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import todoSlice from "../features/todo/todoSlice";
import postSlice from "../features/post/postSlice";
import commentsSlice from "../features/comments/commentsSlice";
import { baseApi } from "../shared/api";

export const extraArgument = {
    //router,
}


// Создание и конфигурация хранилища
const store = configureStore({
    reducer: {
        user: userSlice,
        todo: todoSlice,
        post: postSlice,
        [baseApi.reducerPath]: baseApi.reducer, // редьюсер RTK Query
    },

    // middleware для работы RTK Query
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: { extraArgument } }).concat(
            baseApi.middleware
        ),


});

export { store }

// ***** TS *****
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch