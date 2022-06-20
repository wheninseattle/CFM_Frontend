import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Stack, Button, Typography, Link, Grid } from '@mui/material';
import Image from 'next/image';
import styled from '@emotion/styled';
import {
  formatDate,
  getInstagramHandleFromUrl,
  makeLocationUrl,
} from 'lib/helperFunctions';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

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

const StyledTypography = styled(Typography)(
  ({ theme }) => `
  color: ${theme.palette.text.secondary};
`
);
const StyledStack = styled(Stack)`
  flex-direction: row;
  gap: 4px;
`;

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
                <StyledLink href={makeLocationUrl(e.address)} target="_blank">
                  <StyledStack>
                    <LocationOnOutlinedIcon />
                    <StyledTypography>
                      {e.address.replace(/,/, '.')}
                    </StyledTypography>
                  </StyledStack>
                </StyledLink>
                <StyledLink href={e.instagram} target="_blank">
                  <StyledStack sx={{ alignItems: 'center' }}>
                    <InstagramIcon />
                    <StyledTypography>{`@${getInstagramHandleFromUrl(
                      e.instagram
                    )}`}</StyledTypography>
                  </StyledStack>
                </StyledLink>
                <StyledStack sx={{ alignItems: 'center' }}>
                  <CalendarMonthOutlinedIcon />
                  <StyledTypography>
                    Last Update: {formatDate(e.last_edited)}
                  </StyledTypography>
                </StyledStack>
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

const dataShape = {
  display_name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  last_edited: PropTypes.string.isRequired,
  profile_image: PropTypes.string.isRequired,
};

FindFridge.propTypes = {
  data: PropTypes.shape(dataShape),
};

export default FindFridge;
