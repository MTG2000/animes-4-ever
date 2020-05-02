import React from "react";
import { Box, Typography } from "@material-ui/core";

const LoadingPage = ({ message = "Loading" }) => {
  return (
    <Box py={6}>
      <Typography variant="h3" align="center" color="textPrimary">
        {message}
      </Typography>
    </Box>
  );
};

export default LoadingPage;
