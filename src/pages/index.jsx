import * as React from 'react';
import Head from 'next/head';
import { Typography, Grid } from '@mui/material';
import MascotCard from 'components/MascotCard';
import FindAFridge from 'components/LandingPage/FindAFridge';

const data = [
  {
    img: {
      src: '/mascot/apple.svg',
      alt: 'Picture of smiling apple holding a list',
      width: 300,
      height: 185,
    },
    title: 'Read Best Practices',
    text: 'Please look over the guidelines for food donation best practices to keep our fridges safe and accessible to all.',
    link: '/guideline',
  },
  {
    img: {
      src: '/mascot/jumpingBlueberries.svg',
      alt: 'Picture of blueberries jumping and waving',
      width: 300,
      height: 185,
    },
    title: 'Volunteer',
    text: 'There are many ways to volunteer to help out the fridges, from driving, bringing food to fridges, or hosting a fridge.',
    link: '/volunteer',
  },
  {
    img: {
      src: '/mascot/pearAndFridge.svg',
      alt: 'Picture of smiling pear and smiling fridge',
      width: 300,
      height: 185,
    },
    title: 'Host A Fridge',
    text: 'Please look over the guidelines for food donation best practices to keep our fridges safe and accessible to all.',
    link: '/host',
  },
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Community Fridge Map</title>
      </Head>

      <FindAFridge />

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        spacing={4}
      >
        <Grid item xs={12} md={12} lg={12}>
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ mb: { xs: 3, lg: 5 } }}
          >
            Get involved with community fridges!
          </Typography>
        </Grid>
        {data.map((card, index) => (
          <Grid item key={index} xs={12} md={4} lg={4}>
            <MascotCard key={'GetInvolved' + index} {...card} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
