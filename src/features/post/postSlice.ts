import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

//https://jsonplaceholder.typicode.com/posts

// TS
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";

// TS
export interface IPost {
    userId: string;
    id: string;
    title: string;
    body: string;
}

const initialState: { posts: IPost[], loadingPostStatus: string } = {
    posts: [],
    loadingPostStatus: 'idle',
}

export const getPostsThunk = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    }
);

export const deletePostByIdThunk = createAsyncThunk(
    'posts/deletePostById',
    async (id: string) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return id;
    }
);


// Slice
const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPostsThunk.pending, (state) => {
                console.log('getPostsThunk - pending')
                state.loadingPostStatus = 'loading';
            })
            .addCase(getPostsThunk.fulfilled, (state, action) => {
                // Если запрос выполнен успешно - обновляем массив пользователей в state
                state.posts = action.payload;
                console.log('getPostsThunk - fulfilled')
                state.loadingPostStatus = 'idle';
            })
            .addCase(getPostsThunk.rejected, (state) => {
                console.log('getPostsThunk - rejected')
                state.loadingPostStatus = 'idle';
            })
            .addCase(deletePostByIdThunk.pending, (state) => {
                console.log('deletePostByIdThunk - pending');
                state.loadingPostStatus = 'loading';
            })
            .addCase(deletePostByIdThunk.fulfilled, (state, action) => {

                state.posts = state.posts.filter((item) => (item.id !== action.payload));
                console.log('deletePostByIdThunk - fulfilled')
                console.log('action.payload = ', action.payload)
                state.loadingPostStatus = 'idle';
            })
            .addCase(deletePostByIdThunk.rejected, (state) => {
                console.log('deletePostByIdThunk - rejected')
                state.loadingPostStatus = 'idle';
            })

    },

});

// Reducers
//const deletePostByIdReducer = postSlice.actions.deletePostByIdReducer; // для записи в состояние

export { postSlice }
export default postSlice.reducer
