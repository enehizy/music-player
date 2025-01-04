import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginToSpotify } from "../utils";

export const useSpotifyToken =()=>{
    const [token,setToken] =React.useState("")
    const location =useLocation()
    const navigate=useNavigate()
     React.useEffect(()=>{
        const hash = location.hash;
        const params = new URLSearchParams(hash.substring(1)); 
        const local_token = sessionStorage.getItem("token");
        const access_token = params.get("access_token");
       
         
         if(local_token && !access_token){
            setToken(local_token)
            return
           }
        setToken(access_token)
    
    if(access_token){
       sessionStorage.setItem('token',access_token)
    }
    },[token])
    return token
}