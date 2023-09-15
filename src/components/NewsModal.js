import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";


export default function NewsModal({news,close}) {
  return (
    <div className="bg-white rounded-md">
        <div className="flex justify-between">
          <div className="text-xl font-bold w-11/12 mb-6">{news.title}</div>
          <div className="text-2xl text-gray-500 hover:text-gray-300 hover:cursor-pointer" onClick={close}>< AiFillCloseCircle /></div>
        </div>
        <div className="text-gray-500 font-bold mb-4">
          <span>{news.author} </span>
          |
          <span> {news.date}</span>
        </div>
        <textarea type="text" className="w-full h-fit border-dashed border-2 border-black h-500px p-3" rows="15" value={news.content}></textarea>
        <div className="flex justify-center mt-3">
        <div className='mr-3 h-8 items-center drop-shadow-md justify-center flex bg-cyan-400 text-white font-semibold border rounded-md w-20 text-center hover:bg-cyan-300 hover:cursor-pointer'>Publish</div>
          <div className='h-8 items-center drop-shadow-md justify-center flex bg-red-500 text-white font-semibold  border rounded-md w-20 text-center hover:bg-red-300 hover:cursor-pointer'>Delete</div>
        </div>
      </div>
  )
}
