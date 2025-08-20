// src/components/PlaylistItemList.jsx
import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { FetchFromAPI } from "../../utils/fetchfromAPI";
import VideoCard from "../videos/VideoCard"; // Assuming you have a VideoCard component for individual videos

const PlaylistItemList = ({ playlistId }) => {
  const [playlistVideos, setPlaylistVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!playlistId) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    // Fetch the videos within the playlist
    FetchFromAPI("playlistItems", {
      part: "snippet",
      playlistId: playlistId,
      maxResults: "50", // Adjust as needed
    })
      .then((data) => {
        // The API returns videos in playlistItems.items
        setPlaylistVideos(data?.items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching playlist items:", err);
        setError(
          "Failed to load playlist videos. Check your API key and quota."
        );
        setLoading(false);
      });
  }, [playlistId]); // Re-fetch when playlistId changes

  if (loading) {
    return (
      <Typography color="gray" sx={{ mt: 2 }}>
        Loading playlist videos...
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography color="error" sx={{ mt: 2 }}>
        {error}
      </Typography>
    );
  }

  if (playlistVideos.length === 0) {
    return (
      <Typography color="gray" sx={{ mt: 2 }}>
        No videos found in this playlist.
      </Typography>
    );
  }

  // Reuse your existing VideoCard component or adapt if you have a different structure
  return (
    <Box sx={{ mt: 3, p: 2, background: "#1e1e1e", borderRadius: "8px" }}>
      <Typography variant="h6" fontWeight="bold" mb={2} color="#fff">
        Videos in Playlist:
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {playlistVideos.map((item) => (
          // Make sure to pass the correct video ID and other details to your VideoCard
          // For playlist items, the video ID is typically at item.snippet.resourceId.videoId
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <VideoCard video={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PlaylistItemList;
