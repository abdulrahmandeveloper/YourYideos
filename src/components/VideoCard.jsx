import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  cardMedia,
  CardMedia,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoChannelUrl,
} from "../utils/constant";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(videoId);
  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          alt={snippet?.title}
          image={snippet?.thumbnails?.high?.url}
          sx={{ width: 358, height: 180 }}
        ></CardMedia>
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight={"bold"} color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle1" fontWeight={"bold"} color="gray">
            {snippet?.demoChannelTitle || demoChannelTitle}
            <CheckCircle
              sx={{
                fontSize: 12,
                color: "gray",
                ml: "5px",
              }}
            ></CheckCircle>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
