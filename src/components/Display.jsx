import React from 'react';
import { Box, Typography, Stack, Button, useMediaQuery, InputBase } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaCrown, FaSmile, FaAward } from 'react-icons/fa';




const Display = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        background: '#000',
        color: '#e0e0e0',
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 8 },
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: 4,
        borderRadius: 0,
        boxShadow: '0 8px 32px rgba(179,114,2,0.10)',
        
      }}
    >
      
      <Stack spacing={3} flex={1} sx={{ py: { xs: 2, md: 4 }, px: { xs: 0, md: 2 } }}>
        <motion.div
          initial={{ y: '2rem', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
        >
          <Typography variant={isMobile ? 'h4' : 'h3'} fontWeight={400} lineHeight={1.1} zIndex={1} position="relative" color="#fff"
              sx={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: 2,
              mb: 1,
              textShadow: '0 4px 24px #b3720255',
              fontSize: isMobile ? '1.6rem' : '2.2rem',
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
          <Box sx={{ width: 80, height: 6, bgcolor: 'primary.main', borderRadius: 3, mt: 1, mb: 2 }} />
        </motion.div>
        <Typography variant="body1" color="#fff" sx={{ fontSize: '1.2rem', mb: 3, textShadow: '0 2px 8px #0008' }}>
          Discover properties designed with precision, elegance, and you in mind. <br />
          Experience stress-free homefinding like never before.
        </Typography>
        

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 2,
            p: 1,
            border: '2px solid #b37202',
            width: isMobile ? '90%' : '40%',
            boxShadow: '0 2px 8px rgba(179,114,2,0.08)',
            mt: 2,
          }}
        >
          <HiLocationMarker size={25} color={theme.palette.primary.main} />
          <InputBase placeholder="Search Location..." sx={{ ml: 2, flex: 1, fontWeight: 500 }} />
          <Button variant="outlined"
            sx={{
              borderRadius: 2,
              padding: '0.6rem 1.5rem',
              background: 'linear-gradient(90deg, #b37202 0%, #f2ac33 100%)',
              color: '#fff',
              fontWeight: 'bold',
              textTransform: 'none',
              boxShadow: '0 2px 8px rgba(179,114,2,0.18)',
              transition: 'all 0.2s',
              '&:hover': {
                background: 'linear-gradient(90deg, #f2ac33 0%, #b37202 100%)',
                color: '#fff',
                transform: 'scale(1.05)',
                boxShadow: '0 4px 16px #b3720255',
              },
            }}
          >Search</Button>
        </Box>

        <Stack direction={isMobile ? 'column' : 'row'} spacing={4} mt={3}>
          <StatItem countStart={7900} countEnd={8800} label="Premium Product" icon={<FaCrown color="#b37202" size={28} />} />
          <StatItem countStart={1950} countEnd={2500} label="Happy Customer" icon={<FaSmile color="#b37202" size={28} />} />
          <StatItem countEnd={35} label="Awards Winning" icon={<FaAward color="#b37202" size={28} />} />
        </Stack>
      </Stack>
      
      
      <Box
        component={motion.div}
        initial={{ x: '7rem', opacity: 0, scale: 0.95 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 2, type: 'ease-in' }}
        whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 8px #b3720255' }}
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '15rem 15rem 0 0',
          overflow: 'hidden',
          border: '2px solid #b37202',
          boxShadow: '0 8px 32px 0 #b3720233',
          position: 'relative',
          width: isMobile ? '95%' : '30rem',
          height: isMobile ? '26rem' : '32rem',
          maxHeight: 700,
        }}
      >
        <img src='/disp.jpg' alt="img1" style={{ width: '100%', height: '300%', maxHeight: '500px', objectFit: 'cover', zIndex: 1, borderRadius: '15rem 15rem 0 0', boxShadow: '0 4px 24px rgba(30,30,30,0.10)' }} />
        {/* Dramatic gold animated overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.28 }}
          transition={{ duration: 2, delay: 1 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 60% 30%, #f2ac33 0%, transparent 60%)',
            zIndex: 2,
            pointerEvents: 'none',
            mixBlendMode: 'screen',
          }}
        />
        {/* Subtle dark overlay for text contrast */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(120deg, rgba(30,30,30,0.13) 60%, rgba(179,114,2,0.13) 100%)',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />
      </Box>
    </Box>
  );
};

const StatItem = ({ countStart = 0, countEnd, label, icon }) => (
  <Box sx={{ textAlign: 'center', minWidth: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
    {icon && <Box>{icon}</Box>}
    <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 700 }}>
      <CountUp start={countStart} end={countEnd} duration={4} />+
    </Typography>
    <Typography variant="body2" color="#fff" sx={{ fontWeight: 500 }}>
      {label}
    </Typography>
  </Box>
);

export default Display;
