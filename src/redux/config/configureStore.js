import { configureStore, } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import login from "../modules/Login"
import pinlist from '../modules/PinList'
import pin from '../modules/Pin'
import pindetail from '../modules/PinDetail'



const store = configureStore({
    reducer:{
        login,
        pinlist,
        pin,
        pindetail,
    },

    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false, }),

});

export default store