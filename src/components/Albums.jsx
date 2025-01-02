import { useQuery ,useQueries} from '@tanstack/react-query'
import React from 'react';
import {getPopularArtistInfo,generateToken} from '../utils'
import axios from 'axios';
import PageHeader from './PageHeader';
import { Link,useSearchParams } from 'react-router-dom';
import Loading from './Loading';
import loading from '../fetching.json'
import { Img } from 'react-image';
import Lottie from 'lottie-react';
function Albums() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const  [newAlbums] =useQueries({
    queries:[
      {
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
           return artist.album_type === 'album'
         })
      console.log({artists})
          return artists
        },
       
      }
    ]
  })
  return (
    <div>
    
   {newAlbums.isLoading&&(<Loading/>)}
   {newAlbums.isError&&('error finding albums')}
   {newAlbums.isSuccess&&(<>
    <PageHeader label="New Released Albums"/>
    <div className='grid md:grid-cols-3 2xl:grid-cols-4 justify-center items-center gap-20 md:px-20'>
         {newAlbums.data.map((album)=>(
          <Link to={album.id} className='flex cursor-pointer flex-col justify-center items-center gap-3 w-[300px] aspect-auto'>    



              <Img src={album.images[0].url} loader={<Lottie animationData={loading}/>}/>
              <h2 className='font-bold text-xl text-center'>{album.name}</h2>
              <div className='flex gap-3'>
              {album.artists.map((artist)=>(
                <p className='text-[#8568f5] font-bold'>{artist.name},</p>
              ))}</div>
             
              <p className='text-sm font-mono  text-[#3dc3c0]'>Release Date: {album.release_date}</p>
              <p className='font-black text-lg text-gray-500'>Total Tracks :{album.total_tracks}</p>
              
              
          </Link>
        
         ))}
           </div>
   </>)}
    </div>
  )
}

export default Albums
