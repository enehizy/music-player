import React from 'react'
import {Outlet} from  'react-router-dom'
import Header from './components/Header'
import NavLink from './components/NavLink'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()


function App() {


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
        
        <main className='   overflow-scroll h-screen w-full pb-20'>
        {/* <div className='p-10 shadow-md '><button className=' bg-[#1DB954] rounded-xl  font-bold text-sm p-2'>Login with spotify</button>
        </div> */}
            <Outlet/>

        </main>
        
    </div>
    </QueryClientProvider>
   
  )
}

export default App
