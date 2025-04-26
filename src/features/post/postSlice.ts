import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

//https://jsonplaceholder.typicode.com/posts

// TS
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";
// TS
// export interface IUserState {
//     firstName: string;
//     lastName: string;
// }

const initialState: { posts: string[] } = {
    posts: []
}

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (payload, { rejectWithValue, dispatch }) => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch(setPostsReducer(result.data));
    }
);

export const deletePostById = createAsyncThunk(
    'posts/deletePostById',
    async (id, { rejectWithValue, dispatch }) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        dispatch(deletePostByIdReducer(id));
    }
);


// Slice
const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPostsReducer: (state, action: PayloadAction<string[]>) => {
            state.posts = action.payload;
        },
        deletePostByIdReducer: (state, action: PayloadAction<string>) => {
            state.posts = state.posts.filter((item) => (item.id !== action.payload));
        },
    },
    //     extraReducers: {
    //         [getPosts.fulfilled]: () => console.log('fulfilled'),
    //         [getPosts.pending]: () => console.log('pending'),
    //         [getPosts.rejected]: () => console.log('rejected'),
    // },
});

// Action
const setPostsReducer = postSlice.actions.setPostsReducer; // для записи в состояние
const deletePostByIdReducer = postSlice.actions.deletePostByIdReducer; // для записи в состояние

export { postSlice }
export default postSlice.reducer
