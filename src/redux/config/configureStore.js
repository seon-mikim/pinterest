import { configureStore, } from "@reduxjs/toolkit";
import loginSlice from "../modules/Login"
import pinSlice from '../modules/Pin'



const store = configureStore({
    reducer:{
        loginSlice,
        pinSlice,
    },

    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false, }),

});

export default store