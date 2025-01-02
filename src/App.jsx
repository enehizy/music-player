import React from 'react'
import {Outlet, useNavigate} from  'react-router-dom'
import NavHeader from './components/NavHeader'
import NavLink from './components/NavLink'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import axios from 'axios'
import { generateToken } from './utils'
const queryClient = new QueryClient()
import stringSimilarity from "string-similarity";
import Header from './components/Header'
import SpotifyPlayer from './components/Player'
import { TrackUriProvider } from './hooks/currentTrackId'

import MobileNav from './components/MobileNav'

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <TrackUriProvider>
          <div className='flex '>
        <nav className='p-6 h-screen shadow-xl hidden md:block'>
        <NavHeader/>
        <h2 className='mt-16 font-black text-gray-600 text-md mb-4 '>Discover</h2>
          <ul className='flex flex-col gap-14  justify-center items-center'>
          <NavLink label="home"/>
          <NavLink label="trending"/>
          {/* <NavLink label="recent" />
          <NavLink label="saved"/> */}
          <NavLink label="artists"/>

          {/* <NavLink label="playlists"/> */}
       
          <NavLink label="albums"/>
          <NavLink label="library"/>
          
          </ul>
         
       
        </nav>
        
        <main className='w-full '>
        {/* <div className='p-10 shadow-md '><button className=' bg-[#1DB954] rounded-xl  font-bold text-sm p-2'>Login with spotify</button>
        </div> */}
        <Header/>
        <header className='block md:hidden p-2 shadow-md'>
        <NavHeader/>
        </header>
       
        
        <div className='h-screen overflow-x-scroll pb-[400px] md:pb-32'>
      
          <Outlet/>
         
        </div>
       <div className='absolute  bottom-0 w-full bg-white'>
         <SpotifyPlayer/>
         <MobileNav/>
       </div>
      
      
            
        </main>
        
    </div>
    </TrackUriProvider>
    </QueryClientProvider>
   
  )
}

export default App
