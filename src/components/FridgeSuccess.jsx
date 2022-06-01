import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/system';
import { Typography, Button } from '@mui/material';

export default function FridgeSuccess({ headline, bodyText }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        textAlign="center"
        variant="h3"
        sx={{ fontWeight: 700, fontSize: '1.5rem' }}
      >
        {headline}
      </Typography>
      <Typography
        textAlign="center"
        variant="body1"
        sx={{
          fontSize: '1.15rem',
          mb: 4,
        }}
      >
        {bodyText}
      </Typography>

      <Box sx={{ mb: 4, display: 'block' }}>
        <Image
          width={163}
          height={245}
          src="/mascot/happyFridge.svg"
          alt="Happy fridge image"
        />
      </Box>
    </Box>
  );
}
