import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export default function FridgeMascotCard({ img, title, text }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography textAlign="center" variant="h2">
        {title}
      </Typography>
      <Typography textAlign="center" variant="body1" sx={{ mb: 4 }}>
        {text}
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Image
          width={img.width}
          height={img.height}
          src={img.src}
          alt={img.alt}
        />
      </Box>
    </Box>
  );
}
