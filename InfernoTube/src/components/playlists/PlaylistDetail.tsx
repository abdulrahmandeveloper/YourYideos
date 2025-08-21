// src/components/PlaylistDetail.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { FetchFromAPI } from "../../utils/fetchfromAPI";
import PlaylistItemList from "./PlaylistItemList";

const PlaylistDetail = () => {
  const { id } = useParams();
  const [playlistDetail, setPlaylistDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    FetchFromAPI("playlists", {
      part: "snippet,status",
      id: id,
    })
      .then((data) => {
        setPlaylistDetail(data?.items[0] || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching playlist details:", err);
        setError(
          "Failed to load playlist details. Check your API key and quota."
        );
        setLoading(false);
      });
  }, [id]); // Re-fetch when playlistId changes

  if (loading) {
    return (
      <Typography color="gray" sx={{ mt: 2, textAlign: "center" }}>
        Loading playlist...
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography color="error" sx={{ mt: 2, textAlign: "center" }}>
        {error}
      </Typography>
    );
  }

  if (!playlistDetail) {
    return (
      <Typography color="gray" sx={{ mt: 2, textAlign: "center" }}>
        Playlist not found.
      </Typography>
    );
  }

  const { snippet } = playlistDetail;

  return (
    <Box minHeight="95vh" sx={{ p: 2 }}>
      {/* Playlist Banner/Header */}
      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
          zIndex: 0, // Lower zIndex so content can overlap
          height: "250px", // Example height
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          p: 3,
          borderRadius: "12px",
          mb: 3,
        }}
      >
        <Typography variant="h4" color="#fff" fontWeight="bold" gutterBottom>
          {snippet.title}
        </Typography>
        <Typography variant="body1" color="gray" sx={{ maxWidth: "80%" }}>
          {snippet.description || "No description available."}
        </Typography>
        <Typography variant="subtitle2" color="#aaa" mt={1}>
          By: {snippet.channelTitle}
        </Typography>
      </Box>

      {/* Playlist Videos */}
      <PlaylistItemList playlistId={id} />
    </Box>
  );
};

export default PlaylistDetail;
