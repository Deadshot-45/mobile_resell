import React from 'react'

const FeaturesBox = ({icon, text, head}) => {
  return (
    <div className="w-1/4 flex items-center content-center flex-col gap-4 py-10 mx-auto my-0">
        <div className="w-28 flex items-center content-center py-8 bg-green-700 rounded-t-3xl rounded-bl-3xl hover:bg-slate-700">
        <i className={`fa-solid ${icon} text-5xl w-full text-center text-white`}></i>
        </div>
        <h1 className="text-center font-extrabold">{head}</h1>
        <p className="text-center">{text}</p>
      </div>
  )
}

export default FeaturesBox