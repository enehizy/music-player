import React from 'react'
import {Outlet, useNavigate} from  'react-router-dom'
import Header from './components/Header'
import NavLink from './components/NavLink'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()


function App() {
const navigate =useNavigate()

  return (
    <QueryClientProvider client={queryClient}>
          <div className='flex '>
        <nav className='p-6 h-screen shadow-xl hidden md:block'>
        <Header/>
        <h2 className='mt-16 font-black text-gray-600 text-md mb-4 '>Discover</h2>
          <ul className='flex flex-col gap-14  justify-center items-center'>
          <NavLink label="home"/>
          <NavLink label="trending"/>
          {/* <NavLink label="recent" />
          <NavLink label="saved"/> */}
          <NavLink label="artists"/>
          {/* <NavLink label="playlists"/> */}
       
          <NavLink label="albums"/>
          <NavLink label="categories"/>
          </ul>
         
       
        </nav>
        
        <main className='   overflow-scroll h-screen w-full pb-20 '>
        {/* <div className='p-10 shadow-md '><button className=' bg-[#1DB954] rounded-xl  font-bold text-sm p-2'>Login with spotify</button>
        </div> */}
               <button onClick={()=> navigate(-1)} className='absolute  top-5  font-black  bg-[#8568f5] text-white rounded-full p-1 translate-x-7'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>






        </button>
            <Outlet/>
            
        </main>
        
    </div>
    </QueryClientProvider>
   
  )
}

export default App
