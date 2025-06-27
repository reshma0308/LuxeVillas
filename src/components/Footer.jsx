import React from "react";
import { Box, Typography, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(120deg, #fffbe6 60%, #f5f5f5 100%)',
        px: isMobile ? 3 : 8,
        py: 6,
        mt: 8,
        boxShadow: '0 -2px 16px rgba(179,114,2,0.06)',
        borderRadius: '16px 16px 0 0',
      }}
    >
      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent="space-between"
        alignItems={isMobile ? "flex-start" : "center"}
        spacing={4}
      >
        
        <Stack spacing={1}>
          <Typography variant="h6">Luxe Villa</Typography> 
          <Typography variant="body2" color="text.secondary">
            We aim to deliver thoughtfully designed spaces <br />
            that truly feel like home.
          </Typography>
        </Stack>

        
        <Stack spacing={2} alignItems={isMobile ? "flex-start" : "flex-end"}>
          <Typography variant="h6">Information</Typography>
          <Typography variant="body2" color="text.secondary">
            Luxe Villas, 27 Residency Lane, Bangalore 560102, India
          </Typography>

          <Stack direction="row" spacing={3}>
            {["Property", "Services", "Product", "About Us"].map((item) => (
              <Typography
                key={item}
                variant="body2"
                color="text.primary"
                sx={{
                  cursor: "pointer",
                  fontWeight: 500,
                  px: 1,
                  borderRadius: 2,
                  transition: 'background 0.2s',
                  '&:hover': {
                    color: 'primary.main',
                    background: '#fffbe6',
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
