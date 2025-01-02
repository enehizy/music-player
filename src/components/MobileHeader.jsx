import React,{useMemo} from 'react'
import {Home,Trending,Artist,Album,Library} from './NavLink'
import NavHeader from './NavHeader'
import { useLocation,Link } from 'react-router-dom'
const MobileNavLink=({children,label})=>{
    const location =useLocation()
    const getLinkFromLabel = useMemo(()=>{
        const accessToken= localStorage.getItem('token');
         switch (label){
             case 'home':
                 return '/';
             // case 'playlists':
             //     return "/playlists"
             case 'albums':
                 return "/albums";
             // case 'recent':
             //     return "/recent";
             case 'artists':
                 return "/artists"
             case 'library':
                 return `/library${accessToken&&`/#access_token=${accessToken}`}`;
             case 'trending':
                 return '/trending'
            
             default:
                 return "/404"
         }
     },[])
      
       let getRegexForLink=React.useMemo(()=>{
         switch (label){
             case 'albums':
                 return /^\/albums(\/[a-zA-Z0-9]*)?$/;
             case 'artists':
                 return /^\/artists(\/[a-zA-Z0-9]*)?$/
             case 'library':
               return /^\/library/
             default:
                 return /^$/;
         }
     
      
       })
  return(
    
    <li className={` capitalize flex flex-col justify-center items-center ${location.pathname ==getLinkFromLabel||getRegexForLink.test(location.pathname)? 'text-[#8568f5] font-black ':'text-gray-500 font-medium '}`}>{children}<Link to={getLinkFromLabel} className='text-center'>{label}</Link></li>
  )
}
function MobileHeader() {
   
  return (
    <header className='block md:hidden shadow-lg'>
        <NavHeader/>
     <ul className='flex w-full justify-between p-5 items-center '>
       <MobileNavLink label="home"><Home/></MobileNavLink>
       <MobileNavLink label="trending" ><Trending/></MobileNavLink>
       <MobileNavLink label="artists"><Artist/></MobileNavLink>
       <MobileNavLink label="albums"><Album/></MobileNavLink>
       <MobileNavLink label="library"><Library/></MobileNavLink>
       {/* <li><Trending/></li>
       <li><Artist/></li>
       <li><Album/></li>
       <li><Library/></li> */}
     </ul>
    </header>
  )
}

export default MobileHeader
