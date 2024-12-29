import React from 'react'
import { useQueries,useQuery } from '@tanstack/react-query'
import { generateToken } from '../utils'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TrackTable from './TrackTable';
import Loading from './Loading';
import { useCurrentTrackId } from '../hooks/useCurrentTrackId';

const formatAlbumTime =(milliseconds)=>{
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
   return  `${hours>0?`${hours} hrs`:""} ${minutes} mins and ${seconds} secs`
}
function Album() {
    const { id } = useParams();
    // const data= useQueries({
    //     queries:[{
    //         queryKey:['album'],
    //         queryFn:async()=>{
    //           const token = await generateToken();
    //           const response = await axios.get(`https://api.spotify.com/v1/albums/${id}`,{
    //             headers :{
    //                 Authorization : `Bearer ${token}`
    //             },
    //           })
    //           console.log({album:response})
    //         }
    //     }]
    // })
    const {isError,isLoading,isSuccess,data} = useQuery({
        queryKey:['album',{id}],
            queryFn:async()=>{
              const token = await generateToken();
              const album_response = await axios.get(`https://api.spotify.com/v1/albums/${id}`,{
                headers :{
                    Authorization : `Bearer ${token}`
                },
              })
              console.log({album:album_response})
            
              const album =album_response.data
              const track_minutes =album.tracks.items.map((item)=> item.duration_ms)
              const total_track_minutes=track_minutes.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
             
              return {...album,total_track_minutes}
            }
    })
    const [_,setTrackId] = useCurrentTrackId()
  return (
    <div>
      {isLoading&&(<Loading/>)}
      {isError&&('error loading album ')}
      {isSuccess&&(
        <div className=''>
        
        <div style={{backgroundImage: `url(${data.images[0].url})`,backgroundSize:'cover'}} className='  shadow-md   '>
           <div className='bg-black/60 w-full h-full  flex gap-20 my-4 p-10  items-center text-white '>
            <img className='h-40 aspect-square  border-4 border-white rounded-full' src={data.images[0].url}/>
            <div className='flex flex-col  gap-4 '>
                <div className='flex gap-3'>
                <p className=' font-bold'>{data.release_date.split("-")[0]}</p>
                <p className='capitalize'>{data.album_type}</p>
               
                </div>
                
                <p className=' text-3xl font-semibold'>{data.name}</p>
                   <div className='flex gap-3'>
                    {data.artists.map(({name})=>(
                            <p className='font-semibold text-xl'>{name},</p>
                        ))}
                  </div>
               
              
                <div className='flex gap-3 text-sm font-bold'>
                  
                 
                    <p>{data.total_tracks} Songs,</p>
                    <p className='flex gap-1 items-center '>{formatAlbumTime(data.total_track_minutes)} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                   </p>
                </div>
             {data.copyrights.map((copy)=>(
                <p className='text-xs'>&copy;{copy.text}</p>
             ))}
            </div>
            </div>
        </div>
       <div className='mt-12'>
        <button onClick={()=>{
          const trackUri =data.tracks.items.map((track)=>track.uri);
          setTrackId(trackUri)
        }} className='bg-white rounded-full  text-white bg-gradient-to-r from-[#3dc3c0] to-[#8568f5] py-1 px-6 font-bold ml-10 mb-10'>Play All</button>
         <TrackTable tracks={data.tracks.items} albumImage={data.images[0].url}/>
       </div>
     
        </div>

      )}

    </div>
  )
}

export default Album
