import logo from './logo.svg';
import './App.css';
import { RiCalendar2Fill, BsPersonCircle, AiFillEye } from "@react-icons/all-files/fa/FaBeer";

function App() {
  return (
    <div className="App">
      <p>News Articles</p>
      <div class="header">
        <div class="header-left">
          <input type="checkbox">
          <input type="button" value="Publish">
          <input type="button" value="Delete">
        </div>
        <div class="header-right">
          <input type="text">
        </div>
      </div>
      <div class="news-list">
        <div class="news-card">
          <div class="news-card-left">
            <!-- icon -->
            <div class="news-card-left-title">
              <input type="checkbox">
              <p class="title">Lorem Ipsum</p>
            </div>
            <div class="news-card-left-details">
              <div class="news-card-author">
                <BsPersonCircle />
                <p>Barnaby Wilbud</p>
              </div>
              <div class="news-card-date">
                <RiCalendar2Fill />
              </div>
            </div>
            <div class="news-card-left-description">
              <p>Lorem ipsum</p>
              <div class="news-card-read">
                <AiFillEye />
                <p>Read Full </p>
              </div>
            </div>
          </div>
          <div class="news-card-right">
            <div class="news-card-right-tags">
              <div class="tag">#Sports</div>
            </div>
          </div>
        </div>
      </div>
      <div class="news-modal">
        <div class="news-modal-header">
          <div class="news-modal-title">fringilla rhoncus mauris enim leo rhoncus sed vestibulum</div>
          <div class="news-modal-exit"><AiFillCloseCircle/></div>
        </div>
        <div class="news-modal-details">
          <span class="news-modal-author">Barnaby Wilbud</span>
          |
          <span class="news-modal-date"></span>
        </div>
        <input type="text" class="news-modal-textbox">
        <div class="news-modal-buttons">
          <input type="button" value="Publish">
          <input type="button" value="Delete">
        </div>
      </div>
    </div>
  );
}

export default App;
