import Lottie from 'lottie-react';
import React from 'react'
import { Img } from 'react-image';
import loading from '../fetching.json'
function convertMillisecondsToMinutes(milliseconds, significantDigits = 3) {
    const minutes = milliseconds / 60000;
    return minutes.toPrecision(significantDigits);  
}
function TrackTable({tracks,albumImage}) {
  return (
    <table className="w-[95%]  border-separate border-spacing-4  pl-6 transition-all -mt-6" >
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
        <tr key={index} className='transition-all shadow-md hover:shadow-[#8568f5] font-semibold text-gray-500 '>
            <td className='font-black'>{index +1}</td>
            <td><Img className='w-10 h-10' src={albumImage || track.album.images[0].url} loader={<Lottie className='w-[70px] h-[70px] m-0 p-0'  animationData={loading}/>}/></td>
           
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
