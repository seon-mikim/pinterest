import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

//핀 등록
export const __AddPin = createAsyncThunk(
    "api/auth/post",
    async (payload, thunkAPI) => {
        try {
            // console.log(payload);
            const data =  await axios.post("http://13.125.24.153/api/auth/post", { 
                payload,
                headers: {
                  Authorization: localStorage.getItem("token1"),
                  RefreshToken: localStorage.getItem("token2")
              }  
            });
            console.log(data);
            // return thunkAPI.fulfillWithValue(data.data);
          } catch (error) {
            console.log(error);
            // return thunkAPI.rejectWithValue(error);
          }
    }
  );

const initialState = {
    pin: [],
    isLoading: false,
    error: null,
  };


export const pinSlice = createSlice({
    name: "pin",
    initialState,
    reducers: {
        removePin: (state, action) => {
            const  index = state.data.findIndex( pin =>  pin.data.id === action.payload);
                  state.pin.splice(index,1);
            axios.delete(`http://13.125.24.153/api/auth/post/${action.payload}`, {
              headers: {
                Authorization: localStorage.getItem("token1"),
                RefreshToken: localStorage.getItem("token2")
            }});
          }
    },
    extraReducers: {},
  });
  
  export const {} = pinSlice.actions;
  export default pinSlice.reducer;