import React from 'react';
import { Box, Typography, Stack, Button, useMediaQuery, InputBase } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';




const Display = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        background:'#0D0D0D',
        
        color: '#e0e0e0',
        px: 8,
        py: 8,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: 4,
      }}
    >
      
      <Stack spacing={3} flex={1}>
        <Box sx={{ position: 'relative', display: 'inline-block' }}>
          
          <motion.div
            initial={{ y: '2rem', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
          >
            <Typography variant={isMobile ? 'h4' : 'h3'} fontWeight={500} lineHeight={1.2} zIndex={1} position="relative" color="#e0e0e0"
                sx={{
                fontFamily: "'Raleway', sans-serif",
                
            }}>
                        
  
             <Typewriter
              words={['Find Your', 'Dream','Home With Us']}
                loop={1}
                cursor
                cursorStyle=" "
                typeSpeed={80}
                deleteSpeed={0}
                delaySpeed={1000}
  />
            </Typography>
          </motion.div>
        </Box>

        <Typography variant="body1" color="#e0e0e0" >
          Discover properties designed with precision, elegance, and you in mind. <br />
          Experience stress-free homefinding like never before.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 8,
            p: 1,
            border: '2px solid #ccc',
            width: isMobile ? '90%' : '40%',
          }}
        >
          <HiLocationMarker size={25} color={theme.palette.primary.main} />
          <InputBase placeholder="Search Location..." sx={{ ml: 2, flex: 1 }} />
          <Button variant="outlined"
          sx={{
            borderRadius: '999px', 
            padding: '0.6rem 1.5rem',
            backgroundColor: 'white',
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': {
            backgroundColor: '#f2ac33',
            color: '#f2ac33',
            borderColor: '2px solid #f2ac33',
            },
        }}>Search</Button>
        </Box>

        
        <Stack direction={isMobile ? 'column' : 'row'} spacing={4} >
          <StatItem countStart={7900} countEnd={8800} label="Premium Product" />
          <StatItem countStart={1950} countEnd={2500} label="Happy Customer" />
          <StatItem countEnd={35} label="Awards Winning" />
        </Stack>
      </Stack>
      
      
      <Box
        component={motion.div}
        initial={{ x: '7rem', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, type: 'ease-in' }}
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '15rem 15rem 0 0',
          overflow: 'hidden',
          border: '8px solid rgba(255, 255, 255, 0.1)',

          width: isMobile ? '95%' : '30rem',
          height: isMobile ? '25rem' : '35rem',
          
        }}
      >
        
        <img src='/img1.jpg' alt="img1" style={{ width: '100%', height: '100%' }} />
      </Box>
    </Box>
  );
};

const StatItem = ({ countStart = 0, countEnd, label }) => (
  <Box>
    <Typography variant="h5">
      <CountUp start={countStart} end={countEnd} duration={4} />+
    </Typography>
    <Typography variant="body2" color="white">
      {label}
    </Typography>
  </Box>
);

export default Display;
