import React, { useState, useContext} from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { RiCalendar2Fill } from "react-icons/ri";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import Modal from "react-overlays/Modal";
import  NewsModal from './NewsModal';
import { NewsContext } from '../App'


export default function NewsCard({news,index}) {
    const { selectedNews, handleSelect } = useContext(NewsContext);
    const [ isOpen, setOpen ] = useState(false);
    
    const renderBackdrop = (props) => <div className="fixed z-50 top-0 bottom-0 left-0 right-0 bg-black opacity-50" {...props} />;

    
    var handleClose = () => setOpen(false);

    function checkboxHandler(e){
       let isSelected = e.target.checked;
       handleSelect(news.id, isSelected);
    }

    return (
        <div>
            <Modal className="fixed w-4/12 z-50 top-44 left-1/4 ml-40 p-9 bg-white rounded-md" show={isOpen} onHide={handleClose} renderBackdrop={renderBackdrop}>
                <NewsModal news={news} key={news.id} close={() => setOpen(false)} />
            </Modal>
            <div className="news-card bg-gray-100 rounded-md flex justify-between p-3.5 mb-3 border border-gray-200 overflow-x-hidden">
                <div className="news-card-left flex max-w-4xl">
                    <div className='flex items-start mr-3'>
                        <PiDotsSixVerticalBold className='mr-2 text-2xl' />
                        <input type="checkbox" checked={ selectedNews.includes(news.id) } onChange={checkboxHandler} className='mt-2 hover:cursor-pointer'></input>
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
                            <div className="news-card-read flex text-blue-600 hover:cursor-pointer hover:text-blue-400" onClick={()=>setOpen(true)}>
                                <AiFillEye className='mr-1 text-xl' />
                                <p>Read Full </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news-card-right mr-4">
                    <div className="news-card-right-tags flex">
                        <div className="tag drop-shadow-md h-8 items-center justify-center flex bg-green-50 text-green-500 font-bold border-green-500 border rounded-md p-2 mr-3">#Sports</div>
                        <div className="tag drop-shadow-md h-8 items-center justify-center flex bg-green-50 text-green-500 font-bold border-green-500 border rounded-md p-2 mr-3">#Worldwide</div>
                        <div className="tag drop-shadow-md h-8 items-center justify-center flex bg-green-50 text-green-500 font-bold border-green-500 border rounded-md p-2">#Local</div>
                    </div>
                </div>
            </div>
        </div>
    )   
}
