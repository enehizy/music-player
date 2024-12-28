import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home';
import {BrowserRouter,Route,Routes,Outlet} from 'react-router-dom'
import Artists from './components/Artists.jsx';
import Albums from './components/Albums.jsx';
import PlayList from './components/PlayList.jsx';
import NotFound from './components/NotFound.jsx';
import Saved from './components/Saved.jsx';
import Recent from './components/Recent.jsx';
import Categories from './components/Categories.jsx';
import Trending from './components/Trending.jsx';
import Artist from './components/Artist.jsx';
import Album from './components/Album.jsx';
import Category from './components/Category.jsx';
import Search from './components/Search.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Home/>}/>
         <Route path="search" element={<Search/>}/>
        <Route path="artists" >
          <Route index element={<Artists/>}/>
          {/* <Route paths='search' element={<div>Artist Search</div>}/> */}
           <Route path=':id' element={<Artist/>}/>
         
        </Route>
        {/* <Route path="playlists" element={<PlayList/>}/> */}
        <Route path="albums" >
          <Route index element={<Albums/>}/>
           <Route path=':id' element={<Album/>}/>
        </Route>
        <Route path="trending" element={<Trending/>}/>
        {/* <Route path="saved" element={<Saved/>}/>
        <Route path="recent" element={<Recent/>}/> */}
       
          
        <Route path="categories" >
          <Route index element={<Categories/>}/>
           <Route path=':id' element={<Category/>}/>
        </Route>
      </Route>
      <Route path="*" element={<NotFound/>}/>
     </Routes>
    </BrowserRouter>

  </StrictMode>,
)
