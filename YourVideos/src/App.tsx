import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./sections/Navbar";
import MainPage from "./sections/MainPage";
import VideoDetail from "./components/videos/VideoDetail";
import ChannelDetails from "./components/channel/ChannelDetails";
import SearchMainPage from "./components/searchs/SearchMainPage";
import PlaylistDetail from "./components/playlists/PlaylistDetail";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" element={<SearchMainPage />} />
        <Route path="/playlist/:id" element={<PlaylistDetail />} />{" "}
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
