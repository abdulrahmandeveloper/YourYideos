import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import { FetchFromAPI } from "../utils/fetchfromAPI";
import Video from "./Video";

const Feed = () => {
  const [selectedcategory, setSelectedcategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${selectedcategory}`).then((data) =>
      setVideos(data.items)
    );
  }, []);
  console.log(videos);
  return (
    <Stack sx={{ flexDirection: { sm: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          <Sidebar
            selectedcategory={selectedcategory}
            setSelectedcategory={setSelectedcategory}
          ></Sidebar>
          @Copyright 2025 InfernoGroup
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={"bold"}
          mb={2}
          sx={{
            color: "white",
          }}
        >
          {selectedcategory}{" "}
          <span
            style={{
              color: "#F31503",
            }}
          >
            Videos
          </span>
        </Typography>
        <Video videos={videos}></Video>
      </Box>
    </Stack>
  );
};

export default Feed;
