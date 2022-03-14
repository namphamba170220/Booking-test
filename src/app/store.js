import { configureStore } from "@reduxjs/toolkit";
import useReducer  from "../component/Auth/component/userSlice";
import counterReducer from '../component/feature/Counter/counterSlice';

const rootReducer = {
    count: counterReducer,
    user : useReducer,
}
const store = configureStore({
    reducer: rootReducer,
});

export default store;

