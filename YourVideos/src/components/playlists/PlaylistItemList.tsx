import { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { FetchFromAPI } from "../../utils/fetchfromAPI";
import VideoCard from "../videos/VideoCard";
import { IvideoItem } from "../../interfaces/VideoItems.interface";

const PlaylistItemList = ({ playlistId }: { playlistId: string }) => {
  const [playlistVideos, setPlaylistVideos] = useState<IvideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!playlistId) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    FetchFromAPI("playlistItems", {
      part: "snippet",
      playlistId: playlistId,
      maxResults: "50",
    })
      .then((data) => {
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
  }, [playlistId]);

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

  return (
    <Box sx={{ mt: 3, p: 2, background: "#1e1e1e", borderRadius: "8px" }}>
      <Typography variant="h6" fontWeight="bold" mb={2} color="#fff">
        Videos in Playlist:
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {playlistVideos.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id.playlistId}>
            <VideoCard video={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PlaylistItemList;
