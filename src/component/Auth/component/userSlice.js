import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../../api/userApi";


const register = createAsyncThunk(
    'user/register' , async (payload) => {
       // call API to resgister
        const data = await userApi.register(payload);
       // save data to lacal storage
       localStorage.setItem('ACCESS_TOKEN' , data.jwt);
       localStorage.setItem('data', data.JSON.stringify(data.uesr));



       return {name : 'nam'};
    }
)

const  userSlice = createSlice({
    name : 'user',
    initialState : {
        current:{},
        setting:{},
    },
    reducers: {},
    extraReducers : {
        [register.fulfilled] : (state, action) => {
            state.current = action.payload;
        }
    }
});

const {reducer} =userSlice;
export default reducer; //default export