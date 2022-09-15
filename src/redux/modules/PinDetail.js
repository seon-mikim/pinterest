import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

//핀 리스트 불러오기
export const __getPinDetail = createAsyncThunk(
    "api/post",
    async (postId, thunkAPI) => {
        try {
            // console.log(payload);
            const data =  await axios.get(`http://13.125.24.153/api/post/${postId}`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem("Token"),
                    RefreshToken: localStorage.getItem("RefreshToken")
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
    pindetail: [],
    isLoading: false,
    error: null,
  };


export const pindetailSlice = createSlice({
    name: "pindetail",
    initialState,
    reducers: {},
    extraReducers: {
          [__getPinDetail.pending]: (state) => {
            state.isLoading = true;
          },
          [__getPinDetail.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.pindetail = action.payload; // Promise가 fullfilled일 때 dispatch
          },
          [__getPinDetail.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload; // Promise가 rejected일 때 dispatch
          },
    },
  });
  
  export const {} = pindetailSlice.actions;
  export default pindetailSlice.reducer;