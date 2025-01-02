import Lottie from 'lottie-react';
import React from 'react'
import { Img } from 'react-image';
import loading from '../fetching.json'
import { useCurrentTrackId } from '../hooks/useCurrentTrackId';
import SoundWave from '../sound-wave.json'
function convertMillisecondsToMinutes(milliseconds, significantDigits = 3) {
    const minutes = milliseconds / 60000;
    return minutes.toPrecision(significantDigits);  
}
function TrackTable({tracks,albumImage}) {
    const [trackId ,setTrackid]=useCurrentTrackId()
    
  return (
    <table className="w-[95%]  border-separate border-spacing-4 pl-2 md:pl-6 transition-all -mt-6 " >
        <thead>
            <tr className='text-left'>
                <th></th>
               <th></th>
                <th>Title</th>
                <th>Artists</th>
                <th>Duration</th>
            </tr>
        </thead>
        <tbody >
       
        {tracks.map((track,index)=>(
        <tr onClick={()=>{
            console.log(track.uri ===trackId) 
            if(track.uri ===trackId){
                return
            }
           setTrackid(track.uri)
        
           
        }}  key={index} className={`${track.uri === trackId&&' shadow-[#8568f5]  '} bg-transparent transition-all duration-75 shadow-md hover:shadow-[#8568f5] font-medium md:font-semibold text-gray-500 group`}>
           
            {track.uri !== trackId &&( <td className=' font-black block group-hover:hidden p-2'>{index +1} </td>)}
            {track.uri !== trackId &&(  <td className='hidden group-hover:block pt-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8568f5" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
            </td>)}
          
            {track.uri === trackId&&(<td><Lottie className='w-10 h-10' animationData={SoundWave}/></td>)}
            
            <td className='bg-transparent'><Img className='  md:w-10 md:h-10' src={albumImage || track.album.images[0].url} loader={<Lottie className='w-[70px] h-[70px] m-0 p-0'  animationData={loading}/>}/></td>
           
            <td>{track.name}</td>
            <td className='text-[#8568f5]'>{track.artists.map((artist)=>(
                <span>{artist.name} ,</span>
            ))} </td>
            <td className=''>{convertMillisecondsToMinutes(track.duration_ms)}</td>
        </tr> 
        ))}
        
        </tbody>
    </table>
  )
}

export default TrackTable
