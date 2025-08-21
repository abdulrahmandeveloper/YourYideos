// src/components/PlaylistCard.jsx
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

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
      <Link to={playlistId ? `/playlist/${playlistId}` : "/"}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={playlistId ? `/playlist/${playlistId}` : "/"}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title?.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : "/"}>
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || "experimental"}
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
