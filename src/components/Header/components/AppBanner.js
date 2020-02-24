import React from 'react';
import { Box, Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Banner from '../banner.jpg';
import SubscriberDialog from '../../SubscriberDialog';

const useStyles = makeStyles(theme => ({
  banner: {
    minHeight: '680px',
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    position: 'relative',
    overflow: 'hidden',
  },
  captionBox: {
    color: theme.palette.common.white,
    position: 'absolute',
    bottom: 100,
    left: 75,
  },
  text: {
    fontSize: 50,
    [theme.breakpoints.down('md')]: {
      lineHeight: 1,
      marginBottom: theme.spacing(2),
    },
  },
  strapline: {
    fontSize: 23,
    fontWeight: 200,
    color: '#E5E5E5',
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
    },
  },
  button: {
    backgroundColor: '#A8BF54',
    padding: theme.spacing(1, 6),
    borderRadius: theme.shape.borderRadius,
    opacity: 1,
    marginTop: theme.spacing(2),
    textTransform: 'capitalize',
    fontSize: 16,
    '&:hover': {
      backgroundColor: '#93a847',
    },
  },
}));

const AppBanner = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box component="div" className={classes.banner}>
      <Grid item xs={12} sm={12} md={12} className={classes.captionBox}>
        <Typography variant="subtitle1" component="h2" className={classes.text}>
          {' '}
          Invest With Purpose{' '}
        </Typography>
        <Typography
          variant="caption"
          component="h5"
          className={classes.strapline}
        >
          {' '}
          A platform that supports your life and goals,
          <br /> and makes you money while doing it.{' '}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Get Started
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => handleClickOpen()}
        >
          Subscribe To Our App
        </Button>
        <SubscriberDialog open={open} setOpen={setOpen} />
      </Grid>
    </Box>
  );
};

export default AppBanner;
