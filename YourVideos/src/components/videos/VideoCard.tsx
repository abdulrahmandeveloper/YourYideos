import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { dataSnippet } from "../../interfaces/VideoItems.interface";

interface IVideoCard {
  video: {
    id: { videoId: string };
    snippet: dataSnippet;
  };
}

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}: IVideoCard) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", md: "320px", sm: "358px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : "/"}>
        <CardMedia
          alt={snippet?.title}
          image={snippet?.thumbnails?.high?.url}
          sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 180 }}
        ></CardMedia>
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : "/"}>
          <Typography variant="subtitle1" fontWeight={"bold"} color="#FFF">
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : "/"}>
          <Typography variant="subtitle1" fontWeight={"bold"} color="gray">
            {snippet?.channelTitle}
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
