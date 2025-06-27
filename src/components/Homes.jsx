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
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Homes = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const swiperRef = React.useRef(null);

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

      
      <Swiper {...sliderSettings} modules={[Navigation]} onSwiper={swiper => (swiperRef.current = swiper)}>
        {data.map((card, i) => (
          <SwiperSlide key={i}>
            <Box
              sx={{
                p: 2,
                borderRadius: '15rem 15rem 0 0',
                maxWidth: 500,
                maxHeight:700,
                mx: "auto",
                transition: "0.3s",
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                border: '1.5px solid #f2ac33',
                background: '#fff',
                boxShadow: '0 4px 16px 0 rgba(179,114,2,0.10)',
                '&:hover': {
                  transform: "scale(1.025)",
                  background: '#f9f9f9',
                  boxShadow: "0px 20px 40px rgba(179,114,2,0.12)",
                  borderColor: '#b37202',
                },
              }}
            >
              <Box
                component="img"
                src={card.image}
                alt={card.name}
                sx={{
                  width: "100%",
                  height: 500,
                  maxHeight: 700,
                  objectFit: "cover",
                  borderRadius: '15rem 15rem 0 0',
                  mb: 2,
                  boxShadow: '0 2px 12px rgba(179,114,2,0.08)',
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

              <Typography fontSize="0.8rem" color="text.secondary" sx={{ maxWidth: 300 }} noWrap>
                {card.detail}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <SlideNextButton swiper={swiperRef} isMobile={isMobile} />
    </Box>
  );
};

export default Homes;

const SlideNextButton = ({ swiper, isMobile }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: { xs: 16, md: 32 },
        right: { xs: 16, md: 32 },
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Button
        onClick={() => swiper.current && swiper.current.slidePrev()}
        sx={{
          width: 64,
          height: 64,
          minWidth: 0,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.35)',
          color: '#b37202',
          border: '2.5px solid #f2ac33',
          boxShadow: '0 8px 32px 0 rgba(179,114,2,0.10)',
          fontSize: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.2s',
          '&:hover': {
            background: 'rgba(255,255,255,0.7)',
            color: '#fff',
            borderColor: '#b37202',
            boxShadow: '0 12px 32px 0 rgba(179,114,2,0.18)',
            transform: 'scale(1.10)',
          },
        }}
      >
        <ChevronLeftIcon sx={{ fontSize: 40 }} />
      </Button>
      <Button
        onClick={() => swiper.current && swiper.current.slideNext()}
        sx={{
          width: 64,
          height: 64,
          minWidth: 0,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.35)',
          color: '#b37202',
          border: '2.5px solid #f2ac33',
          boxShadow: '0 8px 32px 0 rgba(179,114,2,0.10)',
          fontSize: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.2s',
          '&:hover': {
            background: 'rgba(255,255,255,0.7)',
            color: '#fff',
            borderColor: '#b37202',
            boxShadow: '0 12px 32px 0 rgba(179,114,2,0.18)',
            transform: 'scale(1.10)',
          },
        }}
      >
        <ChevronRightIcon sx={{ fontSize: 40 }} />
      </Button>
    </Box>
  );
};
