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
        background: '#fff',
        borderRadius: 0,
        py: 10,
        px: isMobile ? 2 : 6,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "800px",
          mx: "auto",
          background: '#1e1e1e',
          color: '#fff',
          borderRadius: 0,
          py: 6,
          px: isMobile ? 3 : 8,
          border: '2px solid #b37202',
          boxShadow: '0 4px 24px rgba(179,114,2,0.10)',
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
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              background: 'linear-gradient(90deg, #b37202 0%, #f2ac33 100%)',
              color: '#fff',
              fontWeight: 'bold',
              px: 3,
              py: 1.5,
              borderRadius: 0,
              boxShadow: '0 2px 8px rgba(179,114,2,0.18)',
              '&:hover': {
                background: 'linear-gradient(90deg, #f2ac33 0%, #b37202 100%)',
                color: '#fff',
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
