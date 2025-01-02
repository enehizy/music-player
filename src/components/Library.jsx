import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Loading from './Loading'
import { useSpotifyToken } from '../hooks/spotifyToken'
import axios from 'axios'
import TrackTable from './TrackTable'
import PageHeader from './PageHeader'
function Library() {
     const token =useSpotifyToken()
    const {isLoading,isError,data,isSuccess} =useQuery({
        queryKey:['library',{token}],
        queryFn:async()=>{
            try {
                console.log({token})
                 let response = await axios.get(`https://api.spotify.com/v1/me/tracks`,{
                    headers :{
                        Authorization : `Bearer ${token}`
                    },
                     params: {
                        
                        limit:50,
                    }
                 })
                 if(response.status !== 200){
                    location.href = '/login'
                 }
                 console.log({response})
               const tracks= response.data.items.map((track)=> track.track)
               
                 return tracks
               }
               catch(e){
                 throw new Error(e)
               }
        },
        enabled: token !== ""
    })
  return (
    <div>
    
      {isLoading&&(<Loading/>)}
      {isError&&('error loading from library')}
      {isSuccess&&(
        <div>
            <PageHeader label="My Library"/>
            <TrackTable tracks={data}/>
        </div>
      )}
     
    </div>
  )
}

export default Library
