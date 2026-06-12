import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useSpotifyToken = () => {
  const [token, setToken] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const local_token = sessionStorage.getItem("token");
    if (local_token) {
      setToken(local_token);
      setLoading(false);
      return;
    }

    const params = new URLSearchParams(location.search);
    const code = params.get("code");

    if (!code) {
      setLoading(false);
      return;
    }

    const codeVerifier = sessionStorage.getItem("spotify_code_verifier");

    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: import.meta.env.VITE_SPOTIFY_REDIRECT_URI,
        client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
        code_verifier: codeVerifier,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          sessionStorage.setItem("token", data.access_token);
          setToken(data.access_token);
          sessionStorage.removeItem("spotify_code_verifier");
          navigate("/", { replace: true });
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return { token, loading };
};
