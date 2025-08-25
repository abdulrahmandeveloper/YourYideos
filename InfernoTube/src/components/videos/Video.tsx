import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "../channel/ChannelCard";
import PlaylistCard from "../playlists/PlaylistCard";
import Loading from "../Loading";
import { IvideoItem } from "../../interfaces/VideoItems.interface";

export interface IVideos {
  items: IvideoItem[];
  direction: "row" | "row-reverse" | "column" | "column-reverse";
}

const Videos = ({ items, direction }: IVideos) => {
  if (!items?.length) return <Loading message="Loading..."></Loading>;

  if (!direction) {
    console.log("direction: ", direction);
  }
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
          {item.snippet.channelId && <ChannelCard channelDetail={item} />}
          {item.id?.playlistId && (
            <PlaylistCard
              playlistId={item.id.playlistId}
              snippet={item.snippet}
            />
          )}{" "}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
