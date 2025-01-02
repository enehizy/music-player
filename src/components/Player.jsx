import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { useSpotifyToken } from "../hooks/spotifyToken"; 
import { useSpotifyApiToken } from "../hooks/spotifyApiToken";
import  ReactSpotifyPlayer from 'react-spotify-web-playback';
import { useCurrentTrackId } from '../hooks/useCurrentTrackId';
const SpotifyPlayer = () => {


const token =useSpotifyToken()
 const [trackUri ]=useCurrentTrackId()
  

  return (
    <div >
    {token&&trackUri&&(<ReactSpotifyPlayer key={trackUri} token={token} uris={trackUri} autoPlay={true} name="Sound Aura"  styles={{
    activeColor: '#8568f5',
    bgColor: '#8568f5',
    color: '#fff',
    loaderColor: '#fff',
    sliderColor: '#1cb954',
    trackArtistColor: '#ccc',
    trackNameColor: '#fff',
    
  }}/> )}
    </div>
  );
};

export default SpotifyPlayer;