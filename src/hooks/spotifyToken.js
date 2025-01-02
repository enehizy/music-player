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
        
        const access_token = params.get("access_token");
        //  if(!access_token){
        //     navigate("/login")
        //     return
        //  }
        setToken(access_token)
    
    if(access_token){
       localStorage.setItem('token',access_token)
    }else{
       
       LoginToSpotify()
       
    }
    },[token])
    return token
}