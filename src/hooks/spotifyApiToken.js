import { useQuery } from "@tanstack/react-query"
import { generateToken } from "../utils"

export const useSpotifyApiToken =()=>{
    const data =useQuery({
        queryKey:['token'],
        queryFn: generateToken()
    })

   return data
}