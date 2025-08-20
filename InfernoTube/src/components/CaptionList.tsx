// src/components/CaptionList.jsx
import { useState, useEffect } from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { FetchFromAPI } from "../utils/fetchfromAPI"; // Adjust path if needed

const CaptionList = ({ videoId }: { videoId: string | undefined }) => {
  //const captionState = []:ISidebar
  const [captionTracks, setCaptionTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(String || null);

  useEffect(() => {
    if (!videoId) {
      setLoading(false);
      return;
    }

    setLoading(true);
    //setError(null);

    FetchFromAPI("captions", {
      Endpoint: "captions",
      part: "snippet",
      videoId: videoId,
    })
      .then((data) => {
        setCaptionTracks(data?.items || []); // API returns an 'items' array
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching captions:", err);
        setError(
          "Failed to load captions. This API only shows available tracks, not text. Check your API key and quota."
        );
        setLoading(false);
      });
  }, [videoId]); // Re-fetch when videoId changes

  if (loading) {
    return <Typography color="gray">Loading captions...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (captionTracks.length === 0) {
    return (
      <Typography color="gray">
        No caption tracks found for this video.
      </Typography>
    );
  }

  return (
    <Box sx={{ mt: 3, p: 2, backgroundColor: "#1e1e1e", borderRadius: "8px" }}>
      <Typography variant="h6" fontWeight="bold" mb={2} color="#fff">
        Available Caption Tracks:
      </Typography>
      <List>
        {captionTracks.map((track) => (
          <ListItem key={track.id} disablePadding>
            <ListItemText
              primary={
                <Typography color="gray" variant="body2">
                  {track.snippet.language} ({track.snippet.name})
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CaptionList;
