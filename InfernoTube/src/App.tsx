import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetails from "./components/ChannelDetails";
import SearchFeed from "./components/SearchFeed";
import PlaylistDetail from "./components/PlaylistDetail"; // Import the new component

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" exact element={<VideoDetail />} />
        <Route path="/channel/:id" exact element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
        <Route path="/playlist/:id" element={<PlaylistDetail />} />{" "}
        {/* NEW ROUTE HERE */}
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
