import React from 'react'
import {useQuery} from '@tanstack/react-query'
import {generateToken} from '../utils'
import axios from 'axios'
function PlayList() {
    const {isError,isLoading,data,isSuccess} = useQuery({
        queryKey:['playlist'],
        queryFn: async ()=>{
            const token = await generateToken();
            
            const response =await axios.get("https://api.spotify.com/v1/search",{
               headers :{
                   Authorization : `Bearer ${token}`
               },
               params: {
                   q: "trending", // Search keyword
                   type: "playlist", // Search for playlists
                   limit: 50,
                  
                    // Adjust the number of playlists to fetch
                 },
            })
            console.log({response})
        }
    })
  return (
    <div>
{isLoading&&('loading playlist')}
{isError&&('error loading playlist')}
{isSuccess&&(<>{JSON.stringify(data)}</>)}
    </div>
  )
}

export default PlayList
