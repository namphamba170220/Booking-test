import counterReducer from '../pages/Counter/counterSlice';
import userReducer from '../pages/Authentication/userSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
    counter: counterReducer,
    user: userReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;

