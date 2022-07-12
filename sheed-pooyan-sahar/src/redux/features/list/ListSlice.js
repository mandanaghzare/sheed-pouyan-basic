import { createSlice } from '@reduxjs/toolkit';

export const ListSlice = createSlice({
    name: 'list',
    initialState: {
        value: ''
    },
    reducers: {
        getValue: (state) => {
            state.value = state.target.innerText
        }
    }
})

export const { getValue } = ListSlice.actions

export default ListSlice.reducer