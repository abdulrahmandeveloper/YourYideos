import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "../channel/ChannelCard";
import PlaylistCard from "../playlists/PlaylistCard";

const Videos = ({ items, direction }) => {
  if (!items?.length) return "Loading...";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {items.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.playlistId && <PlaylistCard playlist={item} />}{" "}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
