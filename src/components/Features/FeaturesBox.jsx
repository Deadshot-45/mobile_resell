import React from 'react'

const FeaturesBox = ({icon, text, head}) => {
  return (
    <div className="w-1/4 flex items-center content-center flex-col gap-2 py-3 mx-auto my-0">
        <div className="flex items-center content-center p-5 bg-green-700 rounded-t-3xl rounded-bl-3xl hover:bg-slate-700">
        <i className={`fa-solid ${icon} text-xl w-full text-center text-white`}></i>
        </div>
        <h1 className="text-center text-xs font-extrabold">{head}</h1>
        <p className="text-center text-[9px]">{text}</p>
      </div>
  )
}

export default FeaturesBox