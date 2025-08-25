import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChannelCard from "./ChannelCard";
import Video from "../videos/Video";
import { FetchFromAPI } from "../../utils/fetchfromAPI";
import Loading from "../Loading";
import { IvideoItem } from "../../interfaces/VideoItems.interface";

const ChannelDetails = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState<IvideoItem[]>([]);

  useEffect(() => {
    FetchFromAPI("channels", { part: "snippet,statistics", id: id })
      .then((data) => setChannelDetail(data?.items[0]))
      .catch((error) =>
        console.error("Error fetching channel details:", error)
      );

    FetchFromAPI("search", {
      channelId: id,
      part: "snippet",
      order: "date",
      maxResults: "50",
    })
      .then((data) => setVideos(data?.items))
      .catch((error) => console.error("Error fetching channel videos:", error));
  }, [id]);

  if (!channelDetail || !videos)
    return <Loading message="Loading..."></Loading>;

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
          marginTop="-120px"
        ></ChannelCard>
      </Box>
      <Box
        display={"flex"}
        p={"2"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {" "}
        <Box sx={{ mr: { sm: "100px" } }} />{" "}
        <Video items={videos} direction="row" />{" "}
      </Box>
    </Box>
  );
};

export default ChannelDetails;
