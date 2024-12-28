import React from 'react'
import { useQuery } from '@tanstack/react-query'

import axios from 'axios'
import {generateToken} from '../utils'
import PageHeader from './PageHeader'
import { Link } from 'react-router-dom'
import Loading from './Loading'
function Categories() {
   const {data,isSuccess,isLoading,isError} =useQuery({
          queryKey :['categories'],
          queryFn :async ()=>{
              let token =await generateToken()
              console.log({token})
              try{
                let token =await generateToken()
                console.log({token})
                let response= await axios.get(`https://api.spotify.com/v1/search?q=genre:rap&type=artist&limit=10`,{
                  headers :{
                      Authorization : `Bearer ${token}`
                  }
                });
                console.log({response})
               
                  // console.log({categories:response.data.categories.items})
                  // return response.data.categories.items
               
              }
              catch(e){
                 throw new Error(e)
              }
          }
      })
    return (
      
          <>
        
           
          {isLoading&&(<Loading/>)}
          {isError&&(<p>Error occured fetching data</p>)}
          
          {/* {isSuccess&&(
            <div>
             
               <PageHeader label="Categories"/>
               <div className='flex justify-center items-center'>
               <div className='grid md:grid-cols-3 2xl:grid-cols-4 gap-32 pl-50 '>
                      {data.map(({name,icons,id})=>(
                      <Link to={id} className='flex flex-col justify-center items-center gap-3 transition-transform hover:scale-[1.15] '>
                  
                          <img className='w-[200px] h-[200px] rounded-full border-4 border-[#8568f5] transition-all hover:p-2' src={icons[0].url}/>
                          <p className='font-semibold'>{name}</p>
                          </Link>)
                  )}
          </div>
               </div>
              
            </div>
          )} */}
        
    </>
    )
}

export default Categories
