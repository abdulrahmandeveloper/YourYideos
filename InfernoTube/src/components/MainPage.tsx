import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Video from "./videos/Video";
import { FetchFromAPI } from "../utils/fetchfromAPI";
import { IvideoItem } from "../interfaces/VideoItems.interface";
import Right_sidebar from "./right-sidebar/Right-sidebar";

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "New"
  );
  const [items, setItems] = useState<IvideoItem[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await FetchFromAPI("google", "search", {
          part: "snippet",
          q: selectedCategory,
          type: "video,channel,playlist",
          maxResults: "50",
        });
        console.log("main page data:", data);

        setItems(data.items);
      } catch (error) {
        console.log("Failed to fetch items:", error);
      }
    };

    fetchItems();
  }, [selectedCategory]);

  return (
    <Stack
      sx={{ flexDirection: { sx: "column", md: "row" }, height: "100dvh" }}
    >
      <Box
        sx={{
          height: { sx: "auto" },
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
      <Box p={2} sx={{ overflowY: "auto", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>{" "}
        </Typography>

        <Video items={items} direction="row" />
      </Box>
      <Box>
        <Right_sidebar></Right_sidebar>
      </Box>
    </Stack>
  );
};

export default MainPage;
