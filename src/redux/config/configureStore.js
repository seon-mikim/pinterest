import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../modules/Login"


const store = configureStore({
    reducer:{
        loginSlice,
    },

    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false, }),

});

export default store