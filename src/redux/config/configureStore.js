import { configureStore, } from "@reduxjs/toolkit";
import login from "../modules/Login"
import pinlist from '../modules/PinList'
import pin from '../modules/Pin'



const store = configureStore({
    reducer:{
        login,
        pinlist,
        pin,
    },

    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false, }),

});

export default store