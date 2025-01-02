import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Img } from 'react-image';
import Lottie from 'lottie-react';
import loading from '../fetching.json'
function AlbumCard({heading,albums,seeAll}) {
  return (
    <div className='mt-10  mx-10'>
        <div className='mt-10  mb-5 flex justify-between items-center'>
        <h2 className='font-semibold text-md md:text-2xl text-gray-600 '>{heading}</h2>
        {seeAll&&(<Link className='text-[#8568f5] font-semibold md:font-bold 2xl:-translate-x-[100px]' to="/albums">See All</Link>)}
        </div>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 '>
            {albums.map((album)=>(
            <Link to={`/albums/${album.id}`} className='w-[200px] aspect-auto flex flex-col gap-3 justify-center items-center'>
                <Img src={album.images[0].url} loader={<Lottie animationData={loading}/>}/>
                <p className='font-semibold text-lg text-center'>{album.name.slice(0,20)}...</p>
                <p className='text-center text-bold'>{album.artists.map((artist)=>(
                    <span>{artist.name} ,</span>
                ))}</p>
                <p className='font-semibold text-[#8568f5]'>{album.release_date.split("-")[0]}</p>
            </Link>
            ))}

        </div>
       
    </div>
  )
}

export default AlbumCard
