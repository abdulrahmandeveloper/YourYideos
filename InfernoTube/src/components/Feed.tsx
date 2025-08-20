// src/components/Feed.jsx
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Video from "./videos/Video";
import { FetchFromAPI } from "../utils/fetchfromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState(String || null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await FetchFromAPI("search", {
          part: "snippet",
          q: selectedCategory,
          type: "video,channel,playlist",
          maxResults: "50",
        });
        setItems(data.items);
      } catch (error) {
        console.error("Failed to fetch items:", error);
      }
    };

    fetchItems();
  }, [selectedCategory]);

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
        </Typography>

        <Video items={items} />
      </Box>
    </Stack>
  );
};

export default Feed;
