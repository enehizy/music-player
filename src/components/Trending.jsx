import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { generateToken } from '../utils'
import axios from 'axios'
import PageHeader from './PageHeader'
import Loading from './Loading'
import { Link } from 'react-router-dom'
function Trending() {
    let {data,isError,isLoading,isSuccess} =useQuery({
        queryKey:['albums'],
        queryFn :async ()=>{
          const token =await generateToken();
        
          let response =await axios.get(`https://api.spotify.com/v1/browse/new-releases`,{
            headers :{
              Authorization : `Bearer ${token}`
          }, params: {
            
            limit:50,
          }
          })
         const  data=response.data.albums.items;
         console.log({data})
         const artists = data.filter((artist)=>{
           return artist.album_type === 'single'
         })
      console.log({artists})
          return response.data.albums.items
        }
      })
  
  return (
    <div>
      
     {isLoading&&(<Loading/>)}
     {isError&&('error fetching trending data')}
     {isSuccess&&(
      <>
        <PageHeader label="Trending Singles and Albums"/>
        <div className='grid grid-cols-3 gap-20 px-20'>
        {data.map((album,index)=>(
          <Link to={`/albums/${album.id}`} className='flex gap-5 cursor-pointer'>    


               <h2 className='font-black text-2xl mt-3'>{index + 1}</h2>
              <img className='w-20 h-20 rounded-full border-4 border-[#3dc3c0]' src={album.images[0].url}/>
              <div className='flex flex-col '>
                    <h2 className='font-bold text-base mb-1'>{album.name}</h2>
                    <div className='flex flex-wrap gap-3'>
                    {album.artists.map((artist)=>(
                        <p className='text-[#8568f5] font-semibold text-sm '>{artist.name},</p>
                    ))}</div>
                     <p className='capitalize font-bold text-sm '>{album.album_type},</p>
              </div>
              
             
          
             
              
              
          </Link>
        
         ))}
        </div>
        </>
     )}
    </div>
  )
}

export default Trending
