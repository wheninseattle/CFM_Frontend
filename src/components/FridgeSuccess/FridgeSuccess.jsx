import FridgeMascotCard from 'components/FridgeSuccess/FridgeMascotCard';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'white',
  borderRadius: 45,
  fontWeight: 700,
  backgroundColor: '#1543D4',
  borderColor: '#1543D4',
  border: '2px solid #1543D4',
  minWidth: 345,
  '&:hover': {
    backgroundColor: '#1543D4',
  },
}));

const StyledButtonWhite = styled(StyledButton)(({ theme }) => ({
  color: '#222222',
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: 'white',
  },
}));

const buttonStyles = {
  blue: StyledButton,
  white: StyledButtonWhite,
};

export default function FridgeSuccess({ img, title, text, buttons }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <FridgeMascotCard img={img} title={title} text={text} />

      {buttons.map((btn) => {
        const Btn = buttonStyles[btn.color];

        return (
          <Btn sx={{ mb: 2 }} key={btn.text}>
            {btn.text}
          </Btn>
        );
      })}
    </Box>
  );
}
