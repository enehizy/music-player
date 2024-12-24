import React from 'react'
import axios from 'axios'
import { getUserAccessToken,generateToken,getPopularArtistInfo } from '../utils';
import { useQueries,useQuery } from '@tanstack/react-query';

import { Link, useLocation } from 'react-router-dom';
import PageHeader from './PageHeader';
function convertMillisecondsToMinutes(milliseconds, significantDigits = 3) {
    const minutes = milliseconds / 60000;
    return minutes.toPrecision(significantDigits);  
}


function Home() {
    const location = useLocation();
    
    const recommendedTrackIds = [
        "1HcAC8ftJM0Gra9Vvo8T0Q",
        "1Es7AUAhQvapIcoh3qMKDL",
        "1Mza2sr6tPhy6jjI3HB9fW",
        "0aB0v4027ukVziUGwVGYpG",
        "5rmcjZTrE9JR1YrbNZDFNW",
        "6XVkJ1fM7NkjODPYI7QbAM",
        "2nYeyMeqYDiFSYYtl2BWD6",
        "1JSU2xhybGH1PtvzkZNjzC",
        "1nKVRhOSBIeRzR30ECSesC",
        "4lwfqyQXSDJ7kELpMErMih",
        "1nF1SpkNfgPPozcXh2hvGU",
        "3tFed7YsjGnIfxeLEQwx3R",
        "4VI2Y5xg4gYynQqNQNQbTN",
        "6MF4tRr5lU8qok8IKaFOBE",
        "2plbrEY59IikOBgBGLjaoe",
        "6rDaCGqcQB1urhpCrrD599",
        "3rXlcLZk3MCaRPND5g9QiW",
        "1SocftHhtuqF7k83eUhHiz",
        "0fsgieABBLYkx6rk5N3JUD",
        "6ujdLuZXkyp4yKOZSE64nM"
    ];
    // React.useEffect(()=>{
    
       
    //     const hash = location.hash;
    //     const params = new URLSearchParams(hash.substring(1)); 
    //     const access_token = params.get("access_token");
    // if(access_token){
    //    localStorage.setItem('token',access_token)
    // }else{
       
    //     const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    //     console.log({clientId})
    //     const redirectUri = 'http://localhost:5173/';
    //     const scopes = [
    //         "user-read-private",
    //         "user-read-email",
    //         "user-library-read"
    //     ].join(" ");


    //     const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    //     window.location.href = authUrl;
    // }
    // },[])
    const [recomendations,artists,albums] = useQueries({queries:[{
        queryKey:['recommendations'],
        queryFn: async()=>{
           try {
             let token= await generateToken();
             let response = await axios.get(`https://api.spotify.com/v1/tracks?ids=${recommendedTrackIds.join(",")}`,{
                headers :{
                    Authorization : `Bearer ${token}`
                }
             })
           const tracks= response.data.tracks
           
             return tracks.slice(0,7)
           }
           catch(e){
             throw new Error(e)
           }
        }
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
   return(<div>
    <PageHeader label="Recommended Songs"/>
    {recomendations.isLoading&&('loading reccommended songs')}
    {recomendations.isError&&('error finding recommendations')}
    {recomendations.isSuccess&&(
        <table className="w-[95%]  border-separate border-spacing-4  pl-6 -mt-6" >
        <thead>
            <tr className='text-left'>
                <th></th>
               <th></th>
                <th>Title</th>
                <th>Artist</th>
                <th>Duration</th>
            </tr>
        </thead>
        <tbody >
       
        {recomendations.data.map((track,index)=>(
        <tr key={index} className='transition-all shadow-md hover:shadow-[#8568f5] font-semibold text-gray-500 '>
            <td className='font-black'>{index +1}</td>
            <td><img className='w-10 h-10' src={track.album.images[0].url}/></td>
           
            <td>{track.name}</td>
            <td className='text-[#8568f5]'>{track.artists.map((artist)=>(
                <span>{artist.name} ,</span>
            ))} </td>
            <td className=''>{convertMillisecondsToMinutes(track.duration_ms)}</td>
        </tr> 
        ))}
        
        </tbody>
    </table>
    )}

{artists.isLoading&&('loading artists')}
{artists.isError&&('error finding artists')}
{artists.isSuccess&&(
    <>
    <div className='mt-10 mx-10 mb-5 flex justify-between items-center'>
    <h2 className='font-semibold text-2xl text-gray-600 '>Recommended Artists</h2>
    <Link className='text-[#8568f5] font-bold' to="/artist">See All</Link>
    </div>
    
   <div className='flex px-10 gap-5'>
  
    {artists.data.map((artist)=>(
        <div className='w-[200px]  gap-3 aspect-auto flex flex-col justify-center items-center'>
            <img className='h-[230px]' src={artist.images[0].url}/>
            <p className='font-semibold text-lg text-center'>{artist.name}</p>
        </div>
    ))}
   </div>
   </>
)}


{albums.isLoading&&('loading albums')}
{albums.isError&&('error finding albums')}
{albums.isSuccess&&(
    <div className='mt-10  mx-10'>
        <div className='mt-10  mb-5 flex justify-between items-center'>
        <h2 className='font-semibold text-2xl text-gray-600 '>Recommended Albums</h2>
        <Link className='text-[#8568f5] font-bold' to="/album">See All</Link>
        </div>
        <div className='flex gap-4 '>
            {albums.data.map((album)=>(
            <div className='w-[200px] aspect-auto flex flex-col gap-3 justify-center items-center'>
                <img src={album.images[0].url} />
                <p className='font-bold text-lg'>{album.artists.map((artist)=>(
                    <span>{artist.name}</span>
                ))}</p>
                <p className='font-semibold text-[#8568f5]'>{album.release_date.split("-")[0]}</p>
            </div>
            ))}

        </div>
       
    </div>
    )}
    
   </div>)
}

export default Home
