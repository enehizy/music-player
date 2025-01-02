import React, { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSpotifyToken } from '../hooks/spotifyToken'
export const Home =({isActive})=>{
    return(<svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
         fill={`${isActive?'currentcolor':'none'}`}
        // fill="white"
          stroke="#999"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m16.7 5.683-4.8-3.358c-1.308-.917-3.317-.867-4.575.108L3.15 5.692c-.833.65-1.492 1.983-1.492 3.033v5.75a3.86 3.86 0 0 0 3.85 3.858h8.984a3.85 3.85 0 0 0 3.85-3.85v-5.65c0-1.125-.725-2.508-1.642-3.15M10.625 15a.63.63 0 0 1-.625.625.63.63 0 0 1-.625-.625v-2.5a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625z"
        ></path>
      </svg>)
}
export const Artist=({isActive})=>{
    return( 
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="#999"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          fill={`${isActive?'currentcolor':'none'}`}
          d="M10 15.833c2.758 0 5-2.241 5-5V6.667c0-2.759-2.242-5-5-5s-5 2.241-5 5v4.166c0 2.759 2.242 5 5 5"
        ></path>
        <path
          stroke="#999"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          fill={`${isActive?'currentcolor':'none'}`}
          d="M2.5 9.167v1.666a7.5 7.5 0 0 0 15 0V9.167M7.592 6.233a6.67 6.67 0 0 1 4.583 0M8.358 8.733c1-.275 2.059-.275 3.059 0"
        ></path>
      </svg>
    )
}
export const Album=({isActive})=>{{
    return(  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="#999"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          fill={`${isActive?'currentcolor':'none'}`}
          d="M18.333 10.833v3.334c0 2.916-1.666 4.166-4.166 4.166H5.833c-2.5 0-4.166-1.25-4.166-4.166v-3.334c0-2.208.958-3.458 2.5-3.933a5.5 5.5 0 0 1 1.666-.233h8.334q.914-.002 1.666.233c1.542.475 2.5 1.725 2.5 3.933"
        ></path>
        <path
          stroke="#999"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          fill="currentcolor"
          d="M15.833 5.833V6.9a5.5 5.5 0 0 0-1.666-.233H5.833c-.608 0-1.166.075-1.666.233V5.833c0-.916.75-1.666 1.666-1.666h8.334c.916 0 1.666.75 1.666 1.666M13.333 2.925v1.242H6.667V2.925c0-.692.566-1.258 1.258-1.258h4.15c.692 0 1.258.566 1.258 1.258"
        ></path>
        <path
          stroke="#999"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          fill={`${isActive?'currentcolor':'none'}`}
          d="M7.558 16.208a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2"
        ></path>
        <path
          stroke="#999"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          fill={`${isActive?'currentcolor':'none'}`}
          d="M12.708 14.375v-4.308c0-.917-.575-1.05-1.158-.884l-2.209.6a.876.876 0 0 0-.675.884v4.441"
        ></path>
        <path
          stroke="#999"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          fill={`${isActive?'currentcolor':'none'}`}
          d="M11.608 15.475a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2M8.667 11.958l4.041-1.1"
        ></path>
      </svg>)
}}
export const Trending =({isActive})=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill='none' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path   stroke={`${isActive?'white':'#999'}`} strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
      
    )
}
// const PlayList =({isActive})=>{
//     return (<svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="20"
//         height="20"
//         fill="none"
//         viewBox="0 0 20 20"
//       >
//         <path
//           stroke="#999"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.5"
//           fill={`${isActive?'currentcolor':'none'}`}
//           d="M5.233 18.333a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2"
//         ></path>
//         <path
//           stroke="#999"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.5"
//           fill={`${isActive?'currentcolor':'none'}`}
//           d="M17.367 14V3.833c0-2.166-1.359-2.466-2.734-2.091l-5.2 1.416c-.95.259-1.6 1.009-1.6 2.092v10.475"
//         ></path>
//         <path
//           stroke="#999"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.5"
//           fill={`${isActive?'currentcolor':'none'}`}
//           d="M14.767 16.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2M7.833 7.933l9.534-2.6"
//         ></path>
//       </svg>)
// }
export const Library=({isActive})=>{
  return(  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path  fill={`${isActive?'currentcolor':'none'}`}   stroke="#999" d="M7 3h2v18H7zM4 3h2v18H4zm6 0h2v18h-2zm9.062 17.792l-6.223-16.89l1.877-.692l6.223 16.89z"></path></svg>)
}
// const Recent=({isActive})=>{
//     return( <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="20"
//         height="20"
//         fill={`${isActive?'currentcolor':'none'}`}
//         viewBox="0 0 20 20"
//       >
//         <path
//           stroke="#999"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.5"
//           fill={`${isActive?'currentcolor':'none'}`}
//           d="M18.333 10c0 4.6-3.733 8.333-8.333 8.333A8.336 8.336 0 0 1 1.667 10C1.667 5.4 5.4 1.667 10 1.667S18.333 5.4 18.333 10"
//         ></path>
//         <path
//           stroke="#999"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.5"
//           fill={`${isActive?'currentcolor':'none'}`}
//           d="m13.092 12.65-2.584-1.542c-.45-.266-.816-.908-.816-1.433V6.258"
//         ></path>
//       </svg>)
// }

// const Saved =({isActive})=>{
//     return (
//         <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="20"
//         height="20"
//         fill="none"
//         viewBox="0 0 20 20"
//       >
//         <path
//           fill={`${isActive?'currentcolor':'none'}`} 
//           stroke="#999"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.5"
//           d="M10.517 17.342c-.284.1-.75.1-1.034 0-2.416-.825-7.816-4.267-7.816-10.1 0-2.575 2.075-4.659 4.633-4.659 1.517 0 2.858.734 3.7 1.867a4.6 4.6 0 0 1 3.7-1.867c2.558 0 4.633 2.084 4.633 4.659 0 5.833-5.4 9.275-7.816 10.1"
//         ></path>
//       </svg>
//         )
//     }
//         const Category=({isActive})=>{
//             return(<svg
//                 xmlns="http://www.w3.org/2000/svg"
//                width="20"
//         height="20"
//         fill={`${isActive?'currentcolor':'none'}`} 
//                 viewBox="0 0 24 24"
//               >
//                 <g id="Iconly/Curved/Category">
//                   <g
//                     id="Category"
//                     fillRule="evenodd"
//                      stroke="#999"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="1.5"
//                     clipRule="evenodd"
//                   >
//                     <path
//                       id="Stroke 1"
//                       d="M21 6.674a3.674 3.674 0 1 1-7.348-.001 3.674 3.674 0 0 1 7.348 0"
//                     ></path>
//                     <path
//                       id="Stroke 3"
//                       d="M10.347 6.674a3.674 3.674 0 1 1-7.348 0 3.674 3.674 0 0 1 7.348 0"
//                     ></path>
//                     <path
//                       id="Stroke 5"
//                       d="M21 17.262a3.674 3.674 0 1 1-7.347-.001 3.674 3.674 0 0 1 7.347 0"
//                     ></path>
//                     <path
//                       id="Stroke 7"
//                       d="M10.347 17.262a3.673 3.673 0 1 1-7.346 0 3.673 3.673 0 0 1 7.346 0"
//                     ></path>
//                   </g>
//                 </g>
//               </svg>)
        
// }
function NavLink({label}) {
  let token= useSpotifyToken()
const getLinkFromLabel = useMemo(()=>{
  
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
            return `/library/#access_token=${token}`;
        case 'trending':
            return '/trending'
       
        default:
            return "/404"
    }
},[token])
  let location = useLocation();
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

  
 console.log(getRegexForLink)
  return (
   <li className='grow'> 
   <Link to={getLinkFromLabel}className={`flex px-16 py-1 grow font-bold  gap-2  justify-center items-center capitalize ${location.pathname ==getLinkFromLabel||getRegexForLink.test(location.pathname)? 'bg-white rounded-xl  text-white bg-gradient-to-r from-[#3dc3c0] to-[#8568f5] ':''}`}>
  
   {label=='home'&&<Home isActive={location.pathname ==getLinkFromLabel}/>}
      {label=='artists'&&<Artist isActive={location.pathname ==getLinkFromLabel || getRegexForLink.test(location.pathname)}/>}
      {/* {label=='playlists'&&<PlayList isActive={location.pathname ==getLinkFromLabel}/>} */}
      {label=='albums'&&<Album isActive={(location.pathname ==getLinkFromLabel) || getRegexForLink.test(location.pathname)}/>}
    {/* label=='recent'&&<Recent isActive={location.pathname ==getLinkFromLabel}/> */}
      {label=='library'&&<Library isActive={location.pathname ==getLinkFromLabel || getRegexForLink.test(location.pathname)}/>} 
     
      {label=='trending'&&<Trending isActive={location.pathname ==getLinkFromLabel}/> }
       {label}
   </Link>
      
   </li>
  )
}

export default NavLink
