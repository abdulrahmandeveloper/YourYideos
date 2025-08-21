// ChannelDetails.jsx
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChannelCard from "./ChannelCard";
import Video from "../videos/Video";
import { FetchFromAPI } from "../../utils/fetchfromAPI";
import Loading from "../Loading";

const ChannelDetails = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // --- FIX 1: For fetching channel details ---
    FetchFromAPI("channels", { part: "snippet,statistics", id: id }) // Correct endpoint and params
      .then((data) => setChannelDetail(data?.items[0]))
      .catch((error) =>
        console.error("Error fetching channel details:", error)
      );

    // --- FIX 2: For fetching channel's videos ---
    FetchFromAPI("search", {
      channelId: id,
      part: "snippet",
      order: "date",
      maxResults: "50", // It's good practice to include maxResults
    })
      .then((data) => setVideos(data?.items)) // Corrected data?.item to data?.items
      .catch((error) => console.error("Error fetching channel videos:", error));
  }, [id]);

  // Handle loading state
  if (!channelDetail || !videos)
    return <Loading message="Loading..."></Loading>; // You can use a spinner here

  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);",
            zIndex: 10,
            height: "300px",
          }}
        ></div>
        <ChannelCard
          channelDetail={channelDetail}
          marginTop="-120px" // Often needs adjustment for overlap with banner
        ></ChannelCard>
      </Box>
      <Box
        display={"flex"}
        p={"2"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {" "}
        {/* Added centering for videos */}
        <Box sx={{ mr: { sm: "100px" } }} />{" "}
        {/* This margin box might not be needed if videos are centered */}
        <Video videos={videos} />{" "}
        {/* Removed direction if it's not a flex container here */}
      </Box>
    </Box>
  );
};

export default ChannelDetails;
