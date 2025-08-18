// src/components/Feed.jsx
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Video from "./Video"; // This component now handles videos, channels, and playlists
import { FetchFromAPI } from "../utils/fetchfromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [items, setItems] = useState([]); // Renamed 'videos' to 'items' to hold mixed types

  useEffect(() => {
    // console.log("Videos in state (outside useEffect):", videos); // Keep for debugging if needed

    const fetchItems = async () => {
      try {
        const data = await FetchFromAPI("search", {
          part: "snippet",
          q: selectedCategory,
          // *** Crucial change: search for all types ***
          type: "video,channel,playlist", // <-- Include 'playlist' here
          maxResults: "50", // Keep a reasonable limit to manage API quota
        });
        setItems(data.items); // Set all fetched items (videos, channels, playlists)
      } catch (error) {
        console.error("Failed to fetch items:", error);
        // You might want to set an error state here to display a user-friendly message
        // setError('Failed to load content. Please try again later.');
      }
    };

    fetchItems();
  }, [selectedCategory]); // Dependency array: re-run useEffect when selectedCategory changes

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          // This prop name 'setSelectedCategory' MUST EXACTLY MATCH
          // how it's destructured and used in the Sidebar component.
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright ©2025 ABDULRAHMAN MAWLOOD
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>items</span>{" "}
          {/* Text changed to 'items' to reflect mixed content */}
        </Typography>
        {/* Pass all fetched items to the Video component */}
        {/* The Video component should be updated to handle different item types (video, channel, playlist) */}
        <Video items={items} />
      </Box>
    </Stack>
  );
};

export default Feed;
