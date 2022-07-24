import { createSlice } from "@reduxjs/toolkit";

export const logInSlice = createSlice({
    name: 'logInPopUp',
    initialState:{
        value: false
    },
    reducers:{
        show: (state) => {
            state.value = true
        },
        hide: (state) => {
            state.value = false
        }
    }
})

export const {show,hide} = logInSlice.actions;

export default logInSlice.reducer;

