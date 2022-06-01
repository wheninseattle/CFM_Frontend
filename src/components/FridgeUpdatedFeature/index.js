import FridgeSuccess from 'components/FridgeSuccess';
import { Box, Button } from '@mui/material';

export default function FridgeUpdated() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <FridgeSuccess
        bodyText="You have successfully updated this community fridge listing."
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
    </Box>
  );
}
