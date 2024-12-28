import React from 'react'
import {getPopularArtistInfo} from '../utils'
import { useQuery,useQueries } from '@tanstack/react-query'
import numeral from 'numeral'
import PageHeader from './PageHeader'
import { Link,useSearchParams } from 'react-router-dom'
import Loading from './Loading'
function Artist() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
    const [popularArtists] =useQueries({
      queries:[{
        queryKey : ['artists'],
        queryFn :async ()=>{
         let artists =await  getPopularArtistInfo(40);
         console.log({artists})
        return artists
        },
        enabled :!search 
       }]
    })
  return (
    <div className=''>
         
      
        {popularArtists.isLoading&&(<Loading/>)}
        {popularArtists.isError&&('error finding artist')}
       {popularArtists.isSuccess&&(
<>
<PageHeader label="Popular Artists"/>
        <div className='grid grid-cols-3 px-24 gap-10 2xl:grid-cols-4'>
      {popularArtists.data.map((artist)=>(
       
        <Link to={`${artist.id}`}  className='w-[250px] aspect-auto  flex flex-col justify-center items-center gap-3'>
           
            <img className='w-full h-full ' src={artist.images[0].url}/>
            <p className='font-extrabold text-lg text-center '> {artist.name}</p>
            <p className='text-center text-base font-semibold text-gray-500 flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#8568f5" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8568f5" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>


 {numeral(artist.followers.total).format("0.0a")} </p>
          
           
        </Link>
     
      ))}
        </div>
        </>
       )}
    </div>
  )
}

export default Artist
