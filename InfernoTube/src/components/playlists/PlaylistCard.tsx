// src/components/PlaylistCard.jsx
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoPlaylistTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../../utils/constant"; // Make sure these are defined in your constants

const PlaylistCard = ({ playlist }) => {
  const playlistId = playlist?.id?.playlistId;
  const snippet = playlist?.snippet;

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: "0",
        backgroundColor: "#000", // Dark background to match theme
      }}
    >
      <Link to={playlistId ? `/playlist/${playlistId}` : demoThumbnailUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={playlistId ? `/playlist/${playlistId}` : demoThumbnailUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title?.slice(0, 60) || demoPlaylistTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
        <Typography variant="body2" color="gray" mt={1}>
          Type: Playlist
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlaylistCard;
