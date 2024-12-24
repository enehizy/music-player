import { Buffer } from "buffer";
import axios from 'axios'
export async function generateToken(){

    const client_id= import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
    const tokenUrl = "https://accounts.spotify.com/api/token";
    try {
      const response = await axios.post(tokenUrl, null, {
        headers: {
          Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        params: {
          grant_type: "client_credentials",
        },
      });
  
      return response.data.access_token;
    } catch (error) {
      console.error("Error fetching access token:", error.message);
      throw new Error("Failed to get access token. Please check your credentials.");
    }
    
  }
  
   

export async function getUserAccessToken(authorizationCode) {
    const clientId= import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const clientSecret=import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
    const redirectUri= 'http://localhost:5173/'

    const url =`https://accounts.spotify.com/api/token`;
    const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "http://localhost:5173/");
    const response = await axios.post(url, params, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
   console.log({userToken:response})
   return response.data.access_token
}

export async function getPopularArtistInfo(limit){
    let token =await generateToken();
    try {
        const response = await axios.get("https://api.spotify.com/v1/search", {
          params: {
            q: "genre:rap", // Artists with pop OR rap genre
            type: "artist",
            limit,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
       
        let  artists = response.data.artists.items;
       
       return artists
      } catch (error) {
        console.error("Error fetching artists:", error.message);
      }
    
}
  