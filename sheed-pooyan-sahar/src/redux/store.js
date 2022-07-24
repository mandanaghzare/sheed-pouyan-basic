import { configureStore } from '@reduxjs/toolkit';
import listReducer from './features/list/ListSlice';
import activateSlice from './features/activate/activateSlice';
import logInSlice  from './features/activate/logInSlice';

export default configureStore({
  reducer: {
    list: listReducer,
    activate: activateSlice,
    logInPopUp: logInSlice
  },
})