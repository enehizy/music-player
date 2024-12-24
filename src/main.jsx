import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Artist from './components/Artist.jsx';
import Albums from './components/Albums.jsx';
import PlayList from './components/PlayList.jsx';
import NotFound from './components/NotFound.jsx';
import Saved from './components/Saved.jsx';
import Recent from './components/Recent.jsx';
import Categories from './components/Categories.jsx';
import Trending from './components/Trending.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path="artist" element={<Artist/>}/>
        {/* <Route path="playlists" element={<PlayList/>}/> */}
        <Route path="album" element={<Albums/>}/>
        <Route path="trending" element={<Trending/>}/>
        {/* <Route path="saved" element={<Saved/>}/>
        <Route path="recent" element={<Recent/>}/> */}
        <Route path="categories" element={<Categories/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
     </Routes>
    </BrowserRouter>

  </StrictMode>,
)
