import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { FetchFromAPI } from "../../utils/fetchfromAPI";
import Video from "../videos/Video";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import { IvideoItem } from "../../interfaces/VideoItems.interface";

const SearchMainPage = () => {
  const [videos, setVideos] = useState<IvideoItem[]>([]);
  const { searchTerm } = useParams();

  console.log("searchmain page log: ", searchTerm);
  useEffect(() => {
    FetchFromAPI("search", {
      part: "snippet",
      q: searchTerm,
      maxResults: "50",
    })
      .then((data) => setVideos(data.items))
      .catch((error) => console.error("Error fetching search results:", error));
  }, [searchTerm]);

  if (!videos.length) return <Loading message="Loading..."></Loading>;

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
        Search results for: {}
        <span
          style={{
            color: "#F31503",
          }}
        >
          {searchTerm}
        </span>{" "}
        Videos
      </Typography>
      <Video items={videos} direction="row"></Video>
    </Box>
  );
};

export default SearchMainPage;
