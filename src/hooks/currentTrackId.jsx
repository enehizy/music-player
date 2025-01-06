import React, { useState, useEffect } from "react";
export const TrackContext =React.createContext(undefined)
export const TrackUriProvider = ({children}) => {
    const key ="current_track";
   const [currentTrackId, setCurrentTrackId] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  });
  const clearTrackId = () => {
    
    setCurrentTrackId(null);
    localStorage.removeItem(key);
  };
  useEffect(() => {
    
    if (currentTrackId !== null) {
      localStorage.setItem(key, JSON.stringify(currentTrackId));
    }
   
  }, [currentTrackId]);

  
  
//   return [currentTrackId, setCurrentTrackId, clearTrackId];
   return(<TrackContext.Provider value={[currentTrackId, setCurrentTrackId, clearTrackId]}>
   {children}
   </TrackContext.Provider>)
};



