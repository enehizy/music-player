import React from 'react'

function PageHeader({label}) {
  return (
    <h1 className='text-xl md:text-3xl my-10 ml-20 font-black text-gray-500 md:mt-36'>{label}</h1> 
  )
}

export default PageHeader
