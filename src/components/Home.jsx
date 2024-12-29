import React from 'react'
import axios from 'axios'
import { getUserAccessToken,generateToken,getPopularArtistInfo } from '../utils';
import { useQueries,useQuery } from '@tanstack/react-query';

import { Link, useLocation } from 'react-router-dom';
import PageHeader from './PageHeader';
import TrackTable from './TrackTable';
import Loading from './Loading';
import AlbumCard from './AlbumCard';
import { useSpotifyToken } from '../hooks/spotifyToken';




function Home() {
   
    
    
   const token =useSpotifyToken()
    const allData= useQueries({queries:[{
        queryKey:['recommendations'],
        queryFn: async()=>{
           try {
            console.log(token)
             let response = await axios.get(`https://api.spotify.com/v1/me/top/tracks`,{
                headers :{
                    Authorization : `Bearer ${token}`
                }
             })
             console.log({response})
           const tracks= response.data.items
           
             return tracks.slice(0,7)
           }
           catch(e){
             throw new Error(e)
           }
        },
        enabled:token !== ""
    },
   {
           queryKey : ['home_artists'],
           queryFn :async ()=>{
            let artists =await  getPopularArtistInfo(6);
            console.log({artists})
           return artists.slice(1)
           }
          },
          {
            queryKey:['home_albums'],
            queryFn: async()=>{
                    const token =await generateToken();
                    
                    let response =await axios.get(`https://api.spotify.com/v1/browse/new-releases`,{
                        headers :{
                        Authorization : `Bearer ${token}`
                    }, params: {
                        
                        limit:50,
                    }
                    })
                    const  data=response.data.albums.items;
                
                    const artists = data.filter((artist)=>{
                    return artist.album_type === 'album'
                    })
                    console.log({albums:artists})
                    
                    return artists.slice(5,10)
            }
          }
            
          
    ]})
    const [recomendations,artists,albums] =allData;
    const isError =allData.some((data)=>data.isError)
    const isLoading =allData.some((data)=>data.isLoading)
   
   return(<div>
    <PageHeader label="Most Played Songs"/>
    
    
    {recomendations.isSuccess&&(
    
    <TrackTable tracks={recomendations.data} />
    )}


{artists.isSuccess&&(
    <>
    <div className='mt-10 mx-10 mb-5 flex flex-wrap-reverse justify-between items-center'>
    <h2 className='font-semibold text-2xl text-gray-600 '>Recommended Artists</h2>
    <Link className='text-[#8568f5] font-bold 2xl:-translate-x-[100px]' to="/artists">See All</Link>
    </div>
    
   <div className='grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4  px-10 gap-5'>
  
    {artists.data.map((artist)=>(
        <Link to={`/artists/${artist.id}`} className='w-[200px]  gap-3 aspect-auto flex flex-col justify-center items-center'>
            <img className='h-[230px]' src={artist.images[0].url}/>
            <p className='font-semibold text-lg text-center'>{artist.name}</p>
        </Link>
    ))}
   </div>
   </>
)}



{albums.isSuccess&&(
    // <div className='mt-10  mx-10'>
    //     <div className='mt-10  mb-5 flex justify-between items-center'>
    //     <h2 className='font-semibold text-2xl text-gray-600 '>Recommended Albums</h2>
    //     <Link className='text-[#8568f5] font-bold 2xl:-translate-x-[100px]' to="/album">See All</Link>
    //     </div>
    //     <div className='grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 '>
    //         {albums.data.map((album)=>(
    //         <div className='w-[200px] aspect-auto flex flex-col gap-3 justify-center items-center'>
    //             <img src={album.images[0].url} />
    //             <p className='font-bold text-lg'>{album.artists.map((artist)=>(
    //                 <span>{artist.name}</span>
    //             ))}</p>
    //             <p className='font-semibold text-[#8568f5]'>{album.release_date.split("-")[0]}</p>
    //         </div>
    //         ))}

    //     </div>
       
    // </div>
    <AlbumCard heading="Recommended Albums" albums={albums.data} seeAll/>
    )}
    {isLoading&&(<Loading/>)}
    {isError&&('error finding recommendations')}
   </div>)
}

export default Home
