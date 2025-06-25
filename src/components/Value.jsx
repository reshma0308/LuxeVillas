import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ExpandMore } from "@mui/icons-material";
import data from "../utils/accordion.jsx";

const Value = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="value"
      sx={{
        py: 8,
        px: isMobile ? 2 : 8,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        gap: 10,
          bgcolor: "#bfbdb8",
      }}
    >
      
      <Box
        sx={{
          flex: 1,
          border: "8px solid rgba(232, 232, 232, 0.93)",
          borderRadius: '15rem 15rem 0 0',
          overflow: "hidden",
          maxWidth: "600px",
          maxHeight: "700px",
        }}
      >
        <img
          src="/img2.jpg"
          alt="Our Value"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </Box>

     
      <Stack flex={1} spacing={2}>
        <Typography variant="h6" color="#b37202">
          Why Choose Us
        </Typography>

        <Typography variant="h4" fontWeight={600}>
          Value We Give to You
        </Typography>

        <Typography variant="body1" color="text.secondary">
          We’re always ready to help by providing the best services for you.
          <br />
          We believe a good place to live can make your life better.
        </Typography>

        
        <Box mt={3}>
          {data.map((item, i) => (
            <Accordion key={i} sx={{ mb: 2, boxShadow: 2, borderRadius: 5 }}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  bgcolor: "#fff",
                  px: 2,
                  py: 1,
                  borderBottom: "1px solid #eee",
                  "& .MuiAccordionSummary-content": {
                    alignItems: "center",
                    gap: 2,
                  },
                }}
              >
                <Box
                  sx={{
                    background: "#eeeeff",
                    p: 1,
                    borderRadius: 1,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.icon}
                </Box>
                <Typography fontWeight={500}>{item.heading}</Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ px: 2, py: 1.5 }}>
                <Typography color="text.secondary">{item.detail}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default Value;
