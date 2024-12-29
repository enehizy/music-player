import React from 'react'
import {TrackContext} from './currentTrackId'
export const useCurrentTrackId =()=>{
    return React.useContext(TrackContext)
}