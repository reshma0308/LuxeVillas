import React from 'react';
import { Box, Typography } from '@mui/material';

const MapSection = () => {
  return (
    <Box
      sx={{
        background: '#fff',
        borderRadius: 0,
        boxShadow: '0 4px 24px rgba(179,114,2,0.06)',
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, md: 6 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: 0,
        width: '100%',
      }}
    >
      <Typography 
        variant="h4" 
        fontWeight={700} 
        color="primary" 
        mb={3}
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
          textAlign: 'center',
        }}
      >
        Explore Our Locations
      </Typography>
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: 600, md: 900 },
          height: { xs: 250, sm: 300, md: 400, lg: 450 },
          border: '2px solid #b37202',
          borderRadius: 0,
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(179,114,2,0.08)',
          position: 'relative',
        }}
      >
        <iframe
          title="Luxe Villas Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.993964479836!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c3b2b2b1%3A0x7d0b0b0b0b0b0b!2sBangalore!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
          style={{
            border: 0,
            width: '100%',
            height: '100%',
            display: 'block',
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};

export default MapSection; 