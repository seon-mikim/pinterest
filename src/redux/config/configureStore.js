import { configureStore } from "@reduxjs/toolkit";
import users from "../modules/Login"


const store = configureStore({
    reducer:{
        users,
    }
})

export default store