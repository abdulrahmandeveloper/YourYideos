import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import VideoDetail from "./components/videos/VideoDetail";
import ChannelDetails from "./components/channel/ChannelDetails";
import SearchFeed from "./components/searchs/SearchFeed";
import PlaylistDetail from "./components/playlists/PlaylistDetail"; // Import the new component

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="/playlist/:id" element={<PlaylistDetail />} />{" "}
        {/* NEW ROUTE HERE */}
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
