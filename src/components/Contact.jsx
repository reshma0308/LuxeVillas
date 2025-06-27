import React from "react";
import { Box, Typography, Button, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MdCall } from "react-icons/md";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { MdVideoCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="contact-us"
      sx={{
        px: isMobile ? 2 : 8,
        py: 8,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 6,
        background: '#fff',
        borderRadius: 0,
        boxShadow: '0 4px 24px rgba(179,114,2,0.06)',
      }}
    >
      
      <Stack spacing={3} flex={1}>
        <Typography variant="h6" color="#b37202">
          Contact Us
        </Typography>

        <Typography variant={isMobile ? "h4" : "h3"} fontWeight={600}>
          Let's Connect With Luxe Villas
        </Typography>

        <Typography variant="body1" color="text.secondary">
          We're here to help you with your property queries. Reach out to our
          team and we'll get back to you as soon as possible.
        </Typography>

        <Stack direction={isMobile ? "column" : "row"} spacing={3} mt={5}>
          <Button
            startIcon={<MdCall />}
            variant="contained"
            sx={{
              borderRadius: 0,
              px: 4,
              py: 1,
              background: 'linear-gradient(90deg, #b37202 0%, #f2ac33 100%)',
              color: '#fff',
              fontWeight: 600,
              boxShadow: '0 2px 8px rgba(179,114,2,0.18)',
              '&:hover': {
                background: 'linear-gradient(90deg, #f2ac33 0%, #b37202 100%)',
                color: '#fff',
              },
            }}
          >
            Call Now
          </Button>

          <Button
            startIcon={<HiChatBubbleBottomCenter />}
            variant="contained"
            sx={{
              borderRadius: 0,
              px: 4,
              py: 1,
              background: 'linear-gradient(90deg, #b37202 0%, #f2ac33 100%)',
              color: '#fff',
              fontWeight: 600,
              boxShadow: '0 2px 8px rgba(179,114,2,0.18)',
              '&:hover': {
                background: 'linear-gradient(90deg, #f2ac33 0%, #b37202 100%)',
                color: '#fff',
              },
            }}
          >
            Message Us
          </Button>
          <Button
            startIcon={<BsFillChatDotsFill />}
            variant="contained"
            sx={{
              borderRadius: 0,
              px: 4,
              py: 1,
              background: 'linear-gradient(90deg, #b37202 0%, #f2ac33 100%)',
              color: '#fff',
              fontWeight: 600,
              boxShadow: '0 2px 8px rgba(179,114,2,0.18)',
              '&:hover': {
                background: 'linear-gradient(90deg, #f2ac33 0%, #b37202 100%)',
                color: '#fff',
              },
            }}
          >
            Chat 
          </Button>
          <Button
            startIcon={<MdVideoCall />}
            variant="contained"
            sx={{
              borderRadius: 0,
              px: 4,
              py: 1,
              background: 'linear-gradient(90deg, #b37202 0%, #f2ac33 100%)',
              color: '#fff',
              fontWeight: 600,
              boxShadow: '0 2px 8px rgba(179,114,2,0.18)',
              '&:hover': {
                background: 'linear-gradient(90deg, #f2ac33 0%, #b37202 100%)',
                color: '#fff',
              },
            }}
          >
            Vedio Call
          </Button>
        </Stack>
      </Stack>

      
      <Box
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        maxWidth="500px"
        borderRadius={0}
        overflow="hidden"
        sx={{
          boxShadow: 6,
          border: "8px solid rgba(232, 232, 232, 0.93)",
        }}
      >
        <Box
          component="img"
          src="/img3.jpg"
          alt="Contact"
          sx={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: 0 }}
        />
      </Box>
    </Box>
  );
};

export default Contact;
