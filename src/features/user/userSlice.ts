import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: '',
    lastName: '',
}

// Slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstNameReducer: (state, action) => {
            state.firstName = action.payload;
        },
        setLastNameReducer: (state, action) => {
            state.lastName = action.payload;
        },
    }
});

// Action
const setFirstNameAction = userSlice.actions.setFirstNameReducer;
const setLastNameAction = userSlice.actions.setLastNameReducer;

export { userSlice, setFirstNameAction, setLastNameAction }
export default userSlice.reducer