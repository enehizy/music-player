import { useQueries, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom';
import { generateToken } from '../utils';
import Loading from './Loading';
import numeral from 'numeral'
import TrackTable from './TrackTable';
import AlbumCard from './AlbumCard';
function Artist() {
    const { id } = useParams();
    const data =useQueries({
        queries:[{
            queryKey:['artist',{id}],
            queryFn:async()=>{
            const token =await generateToken();
            const response = await axios.get(`https://api.spotify.com/v1/artists/${id}`,{
                headers :{
                    Authorization : `Bearer ${token}`
                },
            }) 
            console.log({artist:response})
            return response.data
        }
        },{
            queryKey:['artist_top_tracks',{id}],
            queryFn:async()=>{
            const token =await generateToken();
            const response = await axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks`,{
                headers :{
                    Authorization : `Bearer ${token}`
                },
            }) 
            console.log({top_tracks:response})
            return response.data.tracks.slice(0,5)
        }
        },{
            queryKey:['artist_albums',{id}],
            queryFn:async()=>{
            const token =await generateToken();
            const response = await axios.get(`https://api.spotify.com/v1/artists/${id}/albums`,{
                headers :{
                    Authorization : `Bearer ${token}`
                },
            }) 
            console.log({artist_album:response})
            const albums = response.data.items;
            const album_cat =albums.filter((album)=> album.album_type == 'single');
            console.log({album_count:album_cat.length})
            return response.data.items
        }
        }]
        
    })
    const [artist,top_tracks,artist_album]=data;
    const isError =data.some((element)=> element.isError);
    const isLoading = data.some((element)=> element.isLoading);
    const isSuccess =data.some((element)=> element.isSuccess);

  return (
    <div>
      
       {artist.isSuccess&&(
        <>
        <div>
            <div className='h-[500px] w-full text-white' style={{backgroundImage:`url(${artist.data.images[0].url})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPositionY:-200}}>
         
             <div className='w-full h-full bg-black/30 pl-20  pt-40'>
             <p className='font-semibold capitalize'>{artist.data.type}</p>
               <p className=' text-3xl  xl:text-9xl  capitalize font-bold'>{artist.data.name}</p> 
               
                <p className='flex gap-2 font-bold  mt-5'>  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>{numeral(artist.data.followers.total).format("0.0a")} Followers </p>
               
             </div>
            </div>
            
       

        </div>

      
        
        </>
       )}
       {top_tracks.isSuccess&&(
          <div className=''>
          <h2 className='font-semibold text-2xl text-gray-600 m-10'>Top Tracks  </h2> 
          <TrackTable tracks={top_tracks.data}/>
        </div>
       )}
       {artist_album.isSuccess&&(<AlbumCard heading="Albums" albums={artist_album.data} />)}
        {isLoading&&(<Loading/>)}
        {isError&&('error loading artist data')}
    </div>
  )
}

export default Artist
