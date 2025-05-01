import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

// TS
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";

// TS
export interface IComment {
    postId: string;
    id: string;
    name: string;
    email: string;
    body: string;
}

const initialState: { comments: IComment[], loadingPostStatus: string } = {
    comments: [],
    loadingPostStatus: 'idle',
}

// Slice
const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
    },

});

export { commentsSlice }
export default commentsSlice.reducer
