import React from "react";
import { useLocation } from "react-router-dom";

export const useSpotifyToken =()=>{
    const [token,setToken] =React.useState("")
    const location =useLocation()
     React.useEffect(()=>{
        const hash = location.hash;
        const params = new URLSearchParams(hash.substring(1)); 
        const access_token = params.get("access_token");
        setToken(access_token)
    if(access_token){
       localStorage.setItem('token',access_token)
    }else{
       
        const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
        console.log({clientId})
        const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
        const scopes = [
            "user-read-private",
            "user-read-email",
            "user-library-read",
            "user-read-playback-state",
            "user-modify-playback-state",
            "streaming",
            "user-library-modify",
            "user-top-read"
        ].join(" ");


        const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
        window.location.href = authUrl;
    }
    },[token])
    return token
}