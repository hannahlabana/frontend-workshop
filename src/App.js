import './App.css';
import { AiFillCloseCircle } from "react-icons/ai";
import  NewsCard from './components/NewsCard';
import news from './MOCK_DATA.json'

function App() {
  return (
    <div className="p-5 w-9/12 flex flex-col m-auto">
      <p className='text-xl font-extrabold mt-5 mb-4'>News Articles</p>
      <div className="flex justify-between mb-5">
        <div className="flex ">
          <input type="checkbox" className='mr-4'></input>
          <div className='mr-3 h-8 items-center drop-shadow-md justify-center flex bg-cyan-50 text-cyan-500 font-semibold border-cyan-400 border rounded-md w-20 text-center hover:bg-cyan-100 hover:cursor-pointer'>Publish</div>
          <div className='h-8 items-center drop-shadow-md justify-center flex bg-red-50 text-red-500 font-semibold border-red-500 border rounded-md w-20 text-center hover:bg-red-200 hover:cursor-pointer'>Delete</div>
        </div>
        <div className="header-right">
          <input className='border drop-shadow-md w-72 h-9 text-gray-400 p-4 text-sm rounded-md' placeholder="Search ..." type="text"></input>
        </div>
      </div>
      <div className="news-list">
        {
          news.map((news,index) => {
            return(
              <NewsCard news={news} key={news.id} index={index} />
            )
          })
        }
      </div>
      <div className="news-modal">
        <div className="news-modal-header">
          <div className="news-modal-title">fringilla rhoncus mauris enim leo rhoncus sed vestibulum</div>
          <div className="news-modal-exit">< AiFillCloseCircle /></div>
        </div>
        <div className="news-modal-details">
          <span className="news-modal-author">Barnaby Wilbud</span>
          |
          <span className="news-modal-date"></span>
        </div>
        <input type="text" className="news-modal-textbox"></input>
        <div className="news-modal-buttons">
          <input type="button" value="Publish"></input>
          <input type="button" value="Delete"></input>
        </div>
      </div>
    </div>
  );
}

export default App;
