import React from 'react'

const Button = ({style, text}) => {
  return (
    <button className={`p-3 ${style} font-bold rounded-xl`}>{text}</button>
  )
}

export default Button