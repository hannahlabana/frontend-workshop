import React from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { RiCalendar2Fill } from "react-icons/ri";
import { PiDotsSixVerticalBold } from "react-icons/pi";

export default function NewsCard({news,index}) {
    return (
        <div className="news-card bg-gray-100 rounded-md flex justify-between p-3.5 mb-3 border border-gray-200">
            <div className="news-card-left flex max-w-4xl">
                <div className='flex items-start mr-3'>
                    <PiDotsSixVerticalBold className='mr-2 text-2xl' />
                    <input className='mt-1' type="checkbox"></input>
                </div>
                <div>
                    <p className="news-card-title text-lg font-extrabold ">{news.title}</p>
                    <div className="news-card-left-details flex">
                        <div className="news-card-author flex mr-3">
                            <BsPersonCircle className='text-green-500 mr-3 text-lg' />
                            <p className='font-extrabold text-gray-500'>{news.author}</p>
                        </div>
                        <div className="news-card-date flex mr-3">
                            < RiCalendar2Fill className='text-green-500 mr-3 text-lg' />
                            <p className='font-extrabold text-gray-500'>{news.date}</p>
                        </div>
                    </div>
                    <div className="news-card-left-description flex">
                        <p className='text-gray-500 mr-3 w-1/12 whitespace-nowrap text-ellipsis overflow-hidden'>{news.content}</p>
                        <div className="news-card-read flex text-blue-600 hover:cursor-pointer hover:text-blue-400">
                            <AiFillEye className='mr-1 text-xl' />
                            <p>Read Full </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news-card-right mr-4">
                <div className="news-card-right-tags flex">
                    <div className="tag h-8 items-center justify-center flex bg-green-50 text-green-500 font-bold border-green-500 border rounded-md p-2 mr-3">#Sports</div>
                    <div className="tag h-8 items-center justify-center flex bg-green-50 text-green-500 font-bold border-green-500 border rounded-md p-2 mr-3">#Worldwide</div>
                    <div className="tag h-8 items-center justify-center flex bg-green-50 text-green-500 font-bold border-green-500 border rounded-md p-2">#Local</div>
                </div>
            </div>
        </div>
    )
}
