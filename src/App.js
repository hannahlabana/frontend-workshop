import './App.css';
import { useState, createContext, useCallback } from 'react'
import  NewsCard from './components/NewsCard';
import allNews from './MOCK_DATA.json'

export const NewsContext = createContext();


function App() {
  const [ selectedNews, setSelected ] = useState([]);
  const [ newsList, setNewsList ] = useState(allNews);
  const [ isSelectAll, setSelectAll ] = useState(false);

  const handleSelect = useCallback((value, isSelected) => {
    if(isSelected){
      setSelected(current => [...current,value]);
    } else {
      setSelected(current => current.filter((id) => id !== value));
    }
  }, []);

  function handleSelectAll() {
    if(!isSelectAll) {
      setSelectAll(true);
      for(let x = 0; x < allNews.length; x++){
        setSelected(current => [...current,allNews[x].id])
      }
    } else {
      setSelectAll(false);
      setSelected([]);
    }
  }

  function deleteSelected(){
    for(let y = 0 ; y < newsList.length; y++){
      if(selectedNews.includes(newsList[y].id)){
        newsList.splice(y,1)
        setNewsList(newsList);
        y--;
      }
    }
    setSelected([]);
    setSelectAll(false);
  }

  const contextValue = {
    selectedNews,
    handleSelect,
  };


  return (
    <div className="p-5 w-9/12 flex flex-col m-auto">
      <p className='text-xl font-extrabold mt-5 mb-4'>News Articles</p>
      <div className="flex justify-between mb-5">
        <div className="flex ">
          <input type="checkbox" checked={isSelectAll} onChange={handleSelectAll} className='mr-4 hover:cursor-pointer'></input>
          <div className='mr-3 h-8 items-center drop-shadow-md justify-center flex bg-cyan-50 text-cyan-500 font-semibold border-cyan-400 border rounded-md w-20 text-center hover:bg-cyan-100 hover:cursor-pointer'>Publish</div>
          <div onClick={deleteSelected} className='h-8 items-center drop-shadow-md justify-center flex bg-red-50 text-red-500 font-semibold border-red-500 border rounded-md w-20 text-center hover:bg-red-200 hover:cursor-pointer'>Delete</div>
        </div>
        <div className="header-right">
          <input className='border drop-shadow-md w-72 h-9 text-gray-400 p-4 text-sm rounded-md' placeholder="Search ..." type="text"></input>
        </div>
      </div>
      <div className="news-list">
        {
          newsList.map((news,index) => {
            return(
              <NewsContext.Provider key={news.id} value={contextValue}>
                <NewsCard news={news} key={news.id} index={index} />
              </NewsContext.Provider>
              
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
