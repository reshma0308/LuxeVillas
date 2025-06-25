import React from "react";
import { Box, Typography, TextField, Button, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CTASec = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
               bgcolor: "#bfbdb8", 
        py: 10,
        px: isMobile ? 2 : 6,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "800px",
          mx: "auto",
          bgcolor: "black",
          color: "#fff",
          borderRadius: 4,
          py: 6,
          px: isMobile ? 3 : 8,
        }}
      >
        <Typography variant={isMobile ? "h5" : "h4"} fontWeight={700} gutterBottom>
          Ready to Find Your Dream Home?
        </Typography>
        <Typography variant="body1" color="rgba(255,255,255,0.8)" mb={4}>
          Get personalized property recommendations and competitive price quotes delivered to your inbox.
        </Typography>

        <Stack direction={isMobile ? "column" : "row"} spacing={2} justifyContent="center">
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            InputProps={{
              startAdornment: <MailOutlineIcon sx={{ color: "#888", mr: 1 }} />,
              sx: {
                bgcolor: "#fff",
                borderRadius: 2,
              },
            }}
            sx={{ flex: 1, minWidth: 250 }}
          />

          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: "#fff",
              color: "#f2ac33",
              fontWeight: "bold",
              px: 3,
              py: 1.5,
              borderRadius: 2,
              "&:hover": {
                bgcolor: "#f0f0f0",
              },
            }}
          >
            Get Started
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default CTASec;
