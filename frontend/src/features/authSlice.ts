

import {createSlice} from '@reduxjs/toolkit';
// set the users credentials to local storage and remove them

const initialState = {
    userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo") as string) : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
        },
        logout: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem("userInfo");

            localStorage.clear();
        }
    }
});

export const { setCredentials, logout} = authSlice.actions;

export default authSlice.reducer