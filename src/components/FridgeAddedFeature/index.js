import FridgeSuccess from 'components/FridgeSuccess';
import { Box, Button } from '@mui/material';

export default function FridgeAdded() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <FridgeSuccess
        bodyText="You have successfully added a community fridge listing."
        headline="Success!"
      />
      <Button
        variant="contained"
        sx={{
          borderRadius: 45,
          fontWeight: 700,
          backgroundColor: '#1543D4',
          borderColor: '#1543D4',
          border: '2px solid #1543D4',
          mb: 2,
          minWidth: 337,
          '&:hover': {
            border: '2px solid #1543D4',
          },
        }}
      >
        GO TO FRIDGE
      </Button>
      <Button
        variant="outlined"
        sx={{
          borderRadius: 45,
          fontWeight: 700,
          color: '#222222',
          backgroundColor: 'white',
          borderColor: '#1543D4',
          border: '2px solid #1543D4',
          mb: 2,
          minWidth: 337,
          '&:hover': {
            border: '2px solid #1543D4',
          },
        }}
      >
        EDIT FRIDGE
      </Button>
    </Box>
  );
}
