// src/components/Video.jsx (Previously 'Videos.jsx')
import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import PlaylistCard from "./PlaylistCard"; // Import the new PlaylistCard

// Renamed prop from 'videos' to 'items' to reflect mixed content
const Videos = ({ items, direction }) => {
  if (!items?.length) return "Loading..."; // Basic loading state

  return (
    <Stack
      direction={direction || "row"} // Default to row if direction is not specified
      flexWrap="wrap"
      justifyContent="start" // Start alignment for better grid flow
      gap={2}
    >
      {items.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.playlistId && <PlaylistCard playlist={item} />}{" "}
          {/* Render PlaylistCard */}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos; // Ensure this is the correct export name
