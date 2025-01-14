import React from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'

const TopContainer = () => {
  return (
    <div className='w-full flex justify-center items-center mt-20'>
        <LeftContainer/>
        <RightContainer/>
    </div>
  )
}

export default TopContainer