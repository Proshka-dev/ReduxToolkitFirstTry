import { createSlice } from "@reduxjs/toolkit";

// TS
import type { PayloadAction } from '@reduxjs/toolkit'
// TS
export interface IAlbum {
    userId: number;
    id: number;
    title: string;
}

export interface IAlbumsState {
    albumsArr: IAlbum[];
}


const initialState: IAlbumsState = {
    albumsArr: [],
}

// Slice
const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {
        setAlbumsReducer: (state, action: PayloadAction<IAlbum[]>) => {
            state.albumsArr = action.payload;
        },
    }
});

// Reducers
const setAlbumsReducer = albumsSlice.actions.setAlbumsReducer;

export { albumsSlice, setAlbumsReducer }
export default albumsSlice.reducer