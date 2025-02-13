import React from 'react'

const Button = ({style, text}) => {
  return (
    <button className={`px-2 ${style} font-bold rounded-xl`}>{text}</button>
  )
}

export default Button