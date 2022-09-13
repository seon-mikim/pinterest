import axios from "axios";



export default  axios.create({
    baseURL:"http://api/unsplash.com/",
    headers:{
        Authorization:"Client-ID PGVNzHQ4sI8SSXxG2xSMXTDmm0TE7T23uWZffHyudMY",
        
    }
})