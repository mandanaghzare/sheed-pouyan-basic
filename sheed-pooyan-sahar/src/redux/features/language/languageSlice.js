import { createSlice } from "@reduxjs/toolkit";


export const languageSlice = createSlice({
    name: 'language',
    initialState: {
        value: "fa"
    },
    reducers: {
        faLanguage: (state) => {
            state.value = "fa"
        },
        enLanguage: (state) => {
            state.value = "en"
        }
    }
})

export const {faLanguage,enLanguage} = languageSlice.actions;
export default languageSlice.reducer;