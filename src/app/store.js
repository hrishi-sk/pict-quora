import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import queReducer from "../features/queSlice"
export const store = configureStore({
  reducer: {
    user: userReducer,
    que: queReducer
  },
});
