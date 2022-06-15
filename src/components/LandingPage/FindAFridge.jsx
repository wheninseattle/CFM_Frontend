import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'white',
  backgroundColor: '#1543D4',
  borderColor: '#1543D4',
  minWidth: 348,
  '&:hover': {
    backgroundColor: '#1543D4',
  },
}));

const data = {
  img: {
    src: '/mascot/hero.svg',
    alt: 'Fridge icons placed on map of New York',
    width: 375,
    height: 393,
  },
  title: 'Take what you need. Leave what you can.',
  text: 'The NYC Community Fridges map can help you find community fridges containing free food. Click button below for the full map and list of fridges.',
  buttonTitle: 'FIND A FRIDGE',
};

const FindAFridge = ({}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          height: data.img.height,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
          mb: 4,
        }}
      >
        <Image
          src={data.img}
          layout="fill"
          alt={data.img.alt}
          width={data.img.width}
          height={data.img.height}
        />
        <StyledButton>{data.buttonTitle}</StyledButton>
      </Box>
      <Typography variant="h2" sx={{ mb: 2 }}>
        {data.title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        {data.text}
      </Typography>
    </Box>
  );
};

export default FindAFridge;
