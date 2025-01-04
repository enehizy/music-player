import React from 'react'
import { useSpotifyToken } from '../hooks/spotifyToken'
import { Navigate } from 'react-router-dom'

function ProtectedRoutes({children}) {
    const token =useSpotifyToken()
   
  if(token == null || token == undefined){
     return(    <Navigate to="/login"/>)
  }else{
     return <>{children}</>
  }
}

export default ProtectedRoutes
