import { useEffect, useState } from 'react';
import axios from 'axios';
import { Stack, Button, Typography, Link, Grid } from '@mui/material';
import Image from 'next/image';
import styled from '@emotion/styled';
import {
  formatDate,
  getInstagramHandleFromUrl,
  makeDirectionsUrl,
} from 'lib/helperFunctions';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

function FindFridge() {
  const findFridgeDataUrl = 'https://mock-fridge.herokuapp.com';
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(findFridgeDataUrl).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      gap={6}
      px={4}
      py={6}
    >
      {data?.map((e, i) => {
        return (
          <Grid
            item
            s="auto"
            px={{ lg: 8 }}
            key={i + e.display_name}
            maxWidth="500px"
          >
            <Stack direction="row" justifyContent="center" gap={1}>
              <Stack gap={2} sx={{ wordWrap: 'break-word', maxWidth: '250px' }}>
                <StyledH3>{e.display_name}</StyledH3>
                <StyledLink href={makeDirectionsUrl(e.address)} target="_blank">
                  <Stack
                    direction="row"
                    sx={{ color: 'text.secondary' }}
                    gap={1}
                  >
                    <LocationOnOutlinedIcon />
                    <Typography>{e.address.replace(/,/, '.')}</Typography>
                  </Stack>
                </StyledLink>
                <StyledLink href={e.instagram} target="_blank">
                  <Stack
                    direction="row"
                    sx={{ color: 'text.secondary' }}
                    gap={1}
                    alignItems="center"
                  >
                    <InstagramIcon />
                    <Typography>{`@${getInstagramHandleFromUrl(
                      e.instagram
                    )}`}</Typography>
                  </Stack>
                </StyledLink>
                <Stack
                  direction="row"
                  sx={{ color: 'text.secondary' }}
                  gap={1}
                  alignItems="center"
                >
                  <CalendarMonthOutlinedIcon />
                  <Typography sx={{ color: 'text.secondary' }}>
                    Last Update: {formatDate(e.last_edited)}
                  </Typography>
                </Stack>
              </Stack>
              <StyledImage
                src={e.profile_image}
                width="180"
                height="200"
                alt={e.display_name}
              />
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              py={6}
              borderBottom="1px solid"
              borderColor="text.disabled"
            >
              <Button
                sx={{
                  px: 3.5,
                  py: 2,
                  backgroundColor: 'primary.light',
                  color: '#FFF',
                  '&.MuiButtonBase-root:hover': {
                    bgcolor: 'primary.light',
                  },
                }}
              >
                CHECK FRIDGE
              </Button>
              <Button sx={{ px: 3.5, py: 2 }}>UPDATE FRIDGE</Button>
            </Stack>
          </Grid>
        );
      })}
    </Grid>
  );
}

const StyledH3 = styled.h3`
  margin: 0;
  padding: 0;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledImage = styled(Image)`
  border-radius: 5px;
`;

export default FindFridge;
