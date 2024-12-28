import React, { useEffect } from 'react'
import { useNavigate ,useLocation} from 'react-router-dom';
import { generateToken } from '../utils';
import axios from 'axios';
import { useQuery,useQueryClient } from '@tanstack/react-query';
import Lottie from 'lottie-react';
import fetching from  '../fetching.json'
function Header() {
    const navigate =useNavigate();
    const [search,setSearch]=React.useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
      navigate(`/search?q=${search}`)
    }
   


   
    
  return (
    <div className={`bg-[#edebf7] absolute w-full  z-10 `} >
         <header className=' flex gap-10  p-5 '>
    <button onClick={()=> navigate(-1)} className={`  font-black w-10 h-10  bg-[#8568f5] text-white rounded-full p-1 flex justify-center items-center`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
    </button>
    
<form className="flex"  onSubmit={(e)=>{handleSubmit(e)}} >
   
<input onChange={(e)=>{setSearch(e.target.value)}} className=' rounded-full px-5 w-[480px] py-2 border border-[#8568f5] '  placeholder='search artist ,songs and albums'/>
{/* <Lottie className='w-20 h-20' animationData={fetching}/> */}
<button disabled={search.length>=3?false:true} className='bg-[#8568f5] text-white  px-2 rounded-full -translate-x-[70px]  disabled:opacity-50' type='submit'>Search</button>
</form>

</header>
  
    </div>
   
  )
}

export default Header
