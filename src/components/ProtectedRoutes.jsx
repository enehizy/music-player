import { useSpotifyToken } from "../hooks/spotifyToken";
import Login from "./Login";
import Loading from "./Loading";
import React from "react";

function ProtectedRoutes({ children }) {
  const { token, loading } = useSpotifyToken();
  React.useEffect(() => {
    console.log({ myToken: token });
  }, [token]);
  if (loading) return <Loading />;
  if (!token || token == "null" || token == null) return <Login />;

  return <>{children}</>;
}

export default ProtectedRoutes;
