import React from 'react'
import { Link, useLocation } from 'react-router-dom';
function AlbumCard({heading,albums,seeAll}) {
  return (
    <div className='mt-10  mx-10'>
        <div className='mt-10  mb-5 flex justify-between items-center'>
        <h2 className='font-semibold text-2xl text-gray-600 '>{heading}</h2>
        {seeAll&&(<Link className='text-[#8568f5] font-bold 2xl:-translate-x-[100px]' to="/albums">See All</Link>)}
        </div>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 '>
            {albums.map((album)=>(
            <Link to={`/albums/${album.id}`} className='w-[200px] aspect-auto flex flex-col gap-3 justify-center items-center'>
                <img src={album.images[0].url} />
                <p className='font-bold text-lg text-center'>{album.name}</p>
                <p className=''>{album.artists.map((artist)=>(
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
