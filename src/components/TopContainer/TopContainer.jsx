import React from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'

const TopContainer = () => {
  return (
    <div className='w-full flex justify-center items-center px-3 mt-20 mb-6 sm:px-10'>
        <LeftContainer/>
        <RightContainer/>
    </div>
  )
}

export default TopContainer