import { useQueries, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom';
import { generateToken } from '../utils';
import Loading from './Loading';

function Artist() {
    const { id } = useParams();
    const data =useQueries({
        queries:[{
            queryKey:['artist'],
            queryFn:async()=>{
            const token =await generateToken();
            const response = await axios.get(`https://api.spotify.com/v1/artists/${id}`,{
                headers :{
                    Authorization : `Bearer ${token}`
                },
            }) 
            console.log({artist:response})
            return response.data
        }
        },{
            queryKey:['artist_top_tracks'],
            queryFn:async()=>{
            const token =await generateToken();
            const response = await axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks`,{
                headers :{
                    Authorization : `Bearer ${token}`
                },
            }) 
            console.log({top_tracks:response})
            return response.data.tracks
        }
        },{
            queryKey:['artist_albums'],
            queryFn:async()=>{
            const token =await generateToken();
            const response = await axios.get(`https://api.spotify.com/v1/artists/${id}/albums`,{
                headers :{
                    Authorization : `Bearer ${token}`
                },
            }) 
            console.log({artist_album:response})
            return response.data.items
        }
        }]
        
    })
    const [artist,top_tracks,artist_album]=data;
    const isError =data.some((element)=> element.isError);
    const isLoading = data.some((element)=> element.isLoading);

  return (
    <div>
       {isLoading&&(<Loading/>)}
       {isError&&('error loading artist data')}
    </div>
  )
}

export default Artist
