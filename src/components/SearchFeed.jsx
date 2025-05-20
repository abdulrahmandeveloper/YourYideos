import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { FetchFromAPI } from "../utils/fetchfromAPI";
import Video from "./Video";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    FetchFromAPI("search", {
      // Correct endpoint as first argument
      part: "snippet",
      q: searchTerm,
      maxResults: "50", // Added maxResults for better API usage control
    })
      .then((data) => setVideos(data.items))
      .catch((error) => console.error("Error fetching search results:", error)); // Added error handling
  }, [searchTerm]);

  // Optional: Add a loading state
  if (!videos.length) return "Loading...";

  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        sx={{
          color: "white",
        }}
      >
        Search results for: {/* Added a space here for better readability */}
        <span
          style={{
            color: "#F31503",
          }}
        >
          {searchTerm}
        </span>{" "}
        {/* Added a space here for better readability */}
        Videos
      </Typography>
      <Video videos={videos}></Video>
    </Box>
  );
};

export default SearchFeed;
