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