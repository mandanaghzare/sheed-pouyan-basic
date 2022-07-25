import { configureStore } from '@reduxjs/toolkit';
import listReducer from './features/list/ListSlice';
import activateSlice from './features/activate/activateSlice';
import logInSlice  from './features/activate/logInSlice';
import languageSlice from './features/language/languageSlice';

export default configureStore({
  reducer: {
    list: listReducer,
    activate: activateSlice,
    logInPopUp: logInSlice,
    language: languageSlice,
  },
})