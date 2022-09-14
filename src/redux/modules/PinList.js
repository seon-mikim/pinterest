import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

//핀 리스트 불러오기
export const __getList = createAsyncThunk(
    "api/post",
    async (payload, thunkAPI) => {
        try {
            // console.log(payload);
            const data =  await axios.get("http://13.125.24.153/api/post", {
                headers: {
                  Authorization: localStorage.getItem("token1"),
                  RefreshToken: localStorage.getItem("token2")
              }  
            });
            // console.log(data);
            return thunkAPI.fulfillWithValue(data.data);
          } catch (error) {
            // console.log(error);
            return thunkAPI.rejectWithValue(error);
          }
    }
  );

const initialState = {
    result: [],
    isLoading: false,
    error: null,
  };


export const pinlistSlice = createSlice({
    name: "pinlist",
    initialState,
    reducers: {},
    extraReducers: {
          [__getList.pending]: (state) => {
            state.isLoading = true;
          },
          [__getList.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.pinlist = action.payload; // Promise가 fullfilled일 때 dispatch
          },
          [__getList.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload; // Promise가 rejected일 때 dispatch
          },
    },
  });
  
  export const {} = pinlistSlice.actions;
  export default pinlistSlice.reducer;