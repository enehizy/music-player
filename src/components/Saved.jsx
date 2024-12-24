import { useQuery } from '@tanstack/react-query'
import React from 'react'
import {getUserAccessToken,getPopularArtistInfo} from '../utils'

function Saved() {
   const {data ,isSuccess,isLoading} =useQuery({
    queryKey : ['saved'],
    queryFn :async ()=>{
     let {artists} =await  getPopularArtistInfo();
     console.log({artists})
    }
   })
  return (
    <div>
        {isLoading&&(<h1>loading...</h1>)}
     {isSuccess&&(<h1>data is avaliable</h1>)}
    </div>
  )
}

export default Saved
