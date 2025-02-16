import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    status: false,//user not logged in
    userData: null //info like id or name
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login:(state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout:(state,action) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;