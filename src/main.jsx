import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Artists from './components/Artists.jsx';
import Albums from './components/Albums.jsx';
import NotFound from './components/NotFound.jsx';
import Trending from './components/Trending.jsx';
import Artist from './components/Artist.jsx';
import Album from './components/Album.jsx';
import Search from './components/Search.jsx';
import Login from './components/Login.jsx';
import Library from './components/Library.jsx';
import ProtectedRoutes from './components/ProtectedRoutes.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={
          <Home/>
      }/>
        <Route path="login" element={<Login/>}/> 
         <Route path="search" element={<Search/>}/>
        <Route path="artists" >
          <Route index element={<Artists/>}/>
          {/* <Route paths='search' element={<div>Artist Search</div>}/> */}
           <Route path=':id' element={<Artist/>}/>
         
        </Route>
        <Route path="trending" element={<Trending/>}/>
        <Route path="albums" >
          <Route index element={<Albums/>}/>
           <Route path=':id' element={<Album/>}/>
        </Route>
        <Route path="library" element={<ProtectedRoutes>
          <Library/>
        </ProtectedRoutes>}/>
        {/* <Route path="saved" element={<Saved/>}/>
        <Route path="recent" element={<Recent/>}/> */}
       
          
        
      </Route>
      <Route path="*" element={<NotFound/>}/>
    
     </Routes>
    </BrowserRouter>

  </StrictMode>,
)
