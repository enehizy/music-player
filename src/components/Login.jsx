import React from 'react'
import { LoginToSpotify } from '../utils'

function Login() {
  return (
    <div className='flex flex-col w-full h-screen justify-center items-center gap-y-5'>
        <h1 className='text-xl font-bold'>You need To Login to use this Service</h1>
      <button onClick={LoginToSpotify} className='bg-green-500 text-white py-2 px-4 rounded-full'>Login With Spotify</button>
    </div>
  )
}

export default Login
