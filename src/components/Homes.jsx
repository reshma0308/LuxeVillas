import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  Box,
  Typography,
  Button,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import data from "../utils/slider.json";
import { sliderSettings } from "../utils/common";

const Homes = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="home"
      sx={{
        px: isMobile ? 2 : 6,
        py: 6,
        position: "relative",
        overflow: "hidden",
        bgcolor: "#d9d2c5",
      }}
    >
     
      <Stack
        spacing={2}
        alignItems={isMobile ? "center" : "flex-start"}
        mb={4}
      >
        <Typography variant="h6" sx={{ color: "#b37202" }}>
          Featured Listings
        </Typography>
        <Typography variant="h4" fontWeight={600}>
          Popular Villas
        </Typography>
      </Stack>

      
      <Swiper {...sliderSettings} modules={[Navigation]} navigation>
        <SlideNextButton isMobile={isMobile} />

        {data.map((card, i) => (
          <SwiperSlide key={i}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                maxWidth: "max-content",
                mx: "auto",
                transition: "0.3s",
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                "&:hover": {
                  transform: "scale(1.025)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(136,160,255,0.12) 100%)",
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Box
                component="img"
                src={card.image}
                alt={card.name}
                sx={{
                  width: "340px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: 5,
                }}
              />

              <Typography fontSize="1.1rem" fontWeight={600}>
                <Box component="span" sx={{ color: "orange", mr: 0.5 }}>
                  $
                </Box>
                {card.price}
              </Typography>

              <Typography fontSize="1.3rem" fontWeight={500}>
                {card.name}
              </Typography>

              <Typography fontSize="0.8rem" color="text.secondary" sx={{ maxWidth: 240 }}>
                {card.detail}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Homes;

const SlideNextButton = ({ isMobile }) => {
  const swiper = useSwiper();

  return (
    <Stack
      direction="row"
      spacing={1.5}
      sx={{
        position: isMobile ? "static" : "absolute",
        top: isMobile ? "auto" : "-3.5rem",
        right: isMobile ? "auto" : 0,
        zIndex: 2,
        justifyContent: isMobile ? "center" : "flex-end",
        mb: isMobile ? 2 : 0,
      }}
    >
      <Button
        onClick={() => swiper.slidePrev()}
        sx={{
          fontSize: "1.2rem",
          px: 2,
          py: 0.5,
          borderRadius: 1,
          backgroundColor: "#EEE",
          color: "blue",
          textTransform: "none",
          "&:hover": { backgroundColor: "#DDD" },
        }}
      >
        &lt;
      </Button>
      <Button
        onClick={() => swiper.slideNext()}
        sx={{
          fontSize: "1.2rem",
          px: 1,
          py: 0.5,
          borderRadius: 1,
          backgroundColor: "#FFF",
          color: "blue",
          boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.25)",
          textTransform: "none",
          "&:hover": { backgroundColor: "#f7f7f7" },
        }}
      >
        &gt;
      </Button>
    </Stack>
  );
};
