// src/components/CommentList.jsx
import React, { useState, useEffect } from "react";
import { Box, Typography, Avatar, Stack, Paper } from "@mui/material";
import { FetchFromAPI } from "../utils/fetchfromAPI"; // Adjust path if needed

const CommentList = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!videoId) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    // Endpoint for comment threads
    FetchFromAPI("commentThreads", {
      part: "snippet",
      videoId: videoId,
      maxResults: "20", // Reduced for better quota management, adjust as needed
    })
      .then((data) => {
        // Comments are nested: data.items[i].snippet.topLevelComment.snippet
        // We want the top-level comments for display
        setComments(data?.items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching comments:", err);
        setError("Failed to load comments. Check your API key and quota.");
        setLoading(false);
      });
  }, [videoId]); // Re-fetch when videoId changes

  if (loading) {
    return (
      <Typography color="gray" sx={{ mt: 2 }}>
        Loading comments...
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography color="error" sx={{ mt: 2 }}>
        {error}
      </Typography>
    );
  }

  if (comments.length === 0) {
    return (
      <Typography color="gray" sx={{ mt: 2 }}>
        No comments found for this video, or comments are disabled.
      </Typography>
    );
  }

  return (
    <Box sx={{ mt: 3, p: 2, backgroundColor: "#1e1e1e", borderRadius: "8px" }}>
      <Typography variant="h6" fontWeight="bold" mb={2} color="#fff">
        Comments:
      </Typography>
      <Stack direction="column" spacing={2}>
        {comments.map((commentThread) => {
          const topLevelComment = commentThread.snippet.topLevelComment.snippet;
          return (
            <Paper
              key={commentThread.id}
              sx={{ p: 1.5, background: "#303030", borderRadius: "8px" }}
            >
              <Stack direction="row" spacing={1} alignItems="flex-start">
                <Avatar
                  src={topLevelComment.authorProfileImageUrl}
                  alt={topLevelComment.authorDisplayName}
                />
                <Box>
                  <Typography
                    variant="subtitle2"
                    color="gray"
                    fontWeight="bold"
                  >
                    {topLevelComment.authorDisplayName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#ccc"
                    sx={{ wordBreak: "break-word" }}
                  >
                    {topLevelComment.textDisplay}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
};

export default CommentList;
