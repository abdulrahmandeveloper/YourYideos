import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Stack, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Video from "./Video";
import CaptionList from "../lists/CaptionList";
import CommentList from "../lists/CommentList";
import { FetchFromAPI } from "../../utils/fetchfromAPI";
import Loading from "../Loading";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    FetchFromAPI("videos", { part: "snippet,statistics", id: id })
      .then((data) => {
        setVideoDetail(data.items[0]);
      })
      .catch((error) => console.error("Error fetching video details:", error));

    FetchFromAPI("search", {
      part: "snippet",
      relatedToVideoId: id,
      type: "video",
      maxResults: "50",
    })
      .then((data) => setVideos(data.items))
      .catch((error) => console.error("Error fetching related videos:", error));
  }, [id]);

  if (!videoDetail || !videos) return <Loading message="Loading..."></Loading>;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight={"95vh"}>
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
      >
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "86px",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight={"bold"} p={2}>
              {title}
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              sx={{
                color: "#fff",
              }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  sx={{
                    typography: { sm: "subtitle-1", md: "h6" },
                  }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{
                      fontSize: "12px",
                      color: "gray",
                      ml: "5px",
                    }}
                  ></CheckCircle>
                </Typography>
              </Link>
              <Stack direction={"row"} gap={"20px"} alignContent={"center"}>
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.7,
                  }}
                >
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.7,
                  }}
                >
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
            <Box px={2} py={2} sx={{ color: "#fff" }}>
              <CaptionList videoId={id} />
              <CommentList videoId={id} />
            </Box>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Video items={videos} direction={"column"}></Video>
        </Box>{" "}
      </Stack>
    </Box>
  );
};

export default VideoDetail;
