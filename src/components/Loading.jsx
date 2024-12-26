import React from 'react'
import Lottie from "lottie-react";
import LoadingjSON from '../loading_animation.json'
function Loading() {
  return (
    <div className='flex justify-center items-center w-full'>
        <Lottie width={200} height={200} animationData={LoadingjSON} loop={true} />
        
    </div>
  )
}

export default Loading
