import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

  //로그인
  export const __login = createAsyncThunk(
    "api/member/login",
    async (payload, thunkAPI) => {
        try {
            // console.log(payload);
            const data =  await axios.post("http://13.125.24.153/api/member/login", payload);
            // console.log(data);
            
            localStorage.setItem("token1", data.headers.authorization)
            localStorage.setItem("token2", data.headers.refreshtoken)
  
            if(data.data.success===false)
                alert(data.data.error.message);
            return thunkAPI.fulfillWithValue(data.data);
          } catch (error) {
            return thunkAPI.rejectWithValue(error);
          }
    }
  );

  //회원가입
  export const __join = createAsyncThunk(
    "api/member/signup",
    async (payload, thunkAPI) => {
        try {
            console.log(payload);
            const data =  await axios.post("http://13.125.24.153/api/member/signup", payload);
            // console.log(data);            
            if(data.data.success===false)
                alert(data.data.error.message);
            return thunkAPI.fulfillWithValue(data.data);
          } catch (error) {
            return thunkAPI.rejectWithValue(error);
          }
    }
  );



const loginSlice = createSlice({
    name:'login',
    initialState:{
      data: [],
      success: false,
      error: null,
      isLoading: false
    },
    reducers: {
      
        logout(state){
            localStorage.removeItem('token1')
            localStorage.removeItem('token2')         
        }
    },

    extraReducers: {
      extraReducers: {
        [__login.pending]: (state) => {
          state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [__login.fulfilled]: (state, action) => {
          state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
          state.data = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
        },
        [__login.rejected]: (state, action) => {
          state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
          state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },
      },
    },
  })

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;