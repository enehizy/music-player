import React from 'react'
import Loading from './Loading'
import { useQuery } from '@tanstack/react-query'
import { generateToken } from '../utils'
import { Link, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import TrackTable from './TrackTable'
import AlbumCard from './AlbumCard'
function Search() {
       const [searchparams] =useSearchParams();
       const search =searchparams.get("q")
   
       const {data,isError,isLoading,isSuccess} =useQuery({
    queryKey:['search',search],
    queryFn: async()=>{
        try{
            const token =await generateToken()
           
            const response=await axios.get("https://api.spotify.com/v1/search",{
                headers: {
                  Authorization: `Bearer ${token}`, 
                },
                params: {
                  q: search,
                  type: 'artist,album,track', 
                  limit: 10, 
                },
               })
               console.log(response.data)
               return response.data
        }
        catch(e){
            throw new Error(e)
        }
    }
   })
   
  return (
    <div>
      {isLoading&&(<Loading/>)}
      {isError&&("error searching")}
      {isSuccess&&(<div className=' mt-24 pl-10'>
        <div className=''>
        <div>
        <h2 className='text-2xl mb-5 font-black text-gray-500'>Top Result</h2>
         <Link to={`/artists/${data.artists.items[0].id}`} className=' w-[200px] aspect-auto flex flex-col justify-center items-center gap-3'> 
           
            <img className='w-full rounded-xl  border-4 border-[#8568f5] p-1' src={data.artists.items[0].images[0].url}/>
            <p className='text-xl font-bold'>{data.artists.items[0].name}</p>
         </Link>
         </div>
         <div className='mt-10'>
         <h2 className='text-xl mb-5 font-black text-gray-500'>Top Songs</h2>
         {<TrackTable tracks={data.tracks.items}/>}
         <h2 className='text-xl mt-10 mb-5 font-black text-gray-500'>Related</h2>
         {<div className='-translate-y-8'><AlbumCard heading="" albums={data.albums.items}/></div>}
         </div>
         </div>
      </div>)}
    </div>
  )
}

export default Search
