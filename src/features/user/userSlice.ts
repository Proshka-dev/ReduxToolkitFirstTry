import { createSlice } from "@reduxjs/toolkit";

// TS
import type { PayloadAction } from '@reduxjs/toolkit'
// TS
export interface IUserState {
    firstName: string;
    lastName: string;
}

const initialState: IUserState = {
    firstName: '',
    lastName: '',
}

// Slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstNameReducer: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },
        setLastNameReducer: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        },
    }
});

// Action
const setFirstNameReducer = userSlice.actions.setFirstNameReducer; // для записи в состояние
const setLastNameReducer = userSlice.actions.setLastNameReducer;

export { userSlice, setFirstNameReducer, setLastNameReducer }
export default userSlice.reducer
