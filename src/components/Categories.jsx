import React from 'react'
import { useQuery } from '@tanstack/react-query'

import axios from 'axios'
import {generateToken} from '../utils'
function Categories() {
   const {data,isSuccess,isLoading,isError} =useQuery({
          queryKey :['charts'],
          queryFn :async ()=>{
              let token =await generateToken()
              console.log({token})
              try{
                let token =await generateToken()
                console.log({token})
                let response= await axios.get('https://api.spotify.com/v1/browse/categories',{
                  headers :{
                      Authorization : `Bearer ${token}`
                  }
                });
               
                  console.log({response})
                  return response.data.categories.items
               
              }
              catch(e){
                 throw e
              }
          }
      })
    return (
      
          <>
        
           
          {isLoading&&'loading charts...'}
          {isError&&(<p>Error occured fetching data</p>)}
          
          {isSuccess&&(
            <div>
               <h1 className='text-3xl my-10 ml-20 font-black text-gray-500 '>Categories</h1> 
               <div className='flex justify-center items-center'>
               <div className='grid grid-cols-4 gap-32 pl-50 '>
                      {data.map(({name,icons})=>(
                      <div className='flex flex-col justify-center items-center gap-3 '>
                  
                          <img className='w-[250px] h-[25ß0px] rounded-full border-4 border-[#3dc3c0]' src={icons[0].url}/>
                          <p>{name}</p>
                          </div>)
                  )}
          </div>
               </div>
              
            </div>
          )}
        
    </>
    )
}

export default Categories
