import { configureStore } from "@reduxjs/toolkit";
import login from "../modules/Login"


const store = configureStore({
    reducer:{
        login,
    }
})

export default store