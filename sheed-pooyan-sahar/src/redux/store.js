import { configureStore } from '@reduxjs/toolkit';
import listReducer from './features/list/ListSlice'

export default configureStore({
  reducer: {
    list: listReducer
  },
})