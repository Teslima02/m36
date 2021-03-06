import React from 'react';
import classNames from 'classnames'
import { Box, Grid, Button, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Banner from '../banner.jpg';
import SubscriberDialog from '../../SubscriberDialog';
import Appstore from './../../../../assets/appstore.jpg'
import Googleplay from './../../../../assets/googleplay.jpg'

const useStyles = makeStyles(theme => ({
  caption: {
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    fontSize: theme.typography.fontSize,
  },
  box: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },
  media: {
    marginRight: 10,
    width: '145px',
    height: '43px',
    borderRadius: 0,
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    [theme.breakpoints.down('md')]: {
      zoom: 1.5
    },
  },
  appstore: {
    backgroundImage: `url(${Appstore})`,
  },
  googleplay: {
    backgroundImage: `url(${Googleplay})`
  },
  banner: {
    minHeight: '980px',
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      minHeight: '680px',
    },
  },
  captionBox: {
    color: theme.palette.common.white,
    position: 'absolute',
    bottom: 100,
    left: 75,
    margin: 70,
    [theme.breakpoints.down('md')]: {
      margin: 0,
    }
  },
  text: {
    fontSize: 70,
    fontWeight: 'Bold',
    [theme.breakpoints.down('md')]: {
      // lineHeight: 1,
      fontSize: 40,
      textAlign: 'center',
      marginBottom: theme.spacing(2),
    },
  },
  strapline: {
    fontSize: 23,
    fontWeight: 'normal',
    // fontWeight: 200,
    color: '#E5E5E5',
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
      textAlign: 'center',
    },
  },
  button: {
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1, 6),
    borderRadius: theme.shape.borderRadius,
    opacity: 1,
    marginTop: theme.spacing(2),
    textTransform: 'capitalize',
    fontSize: 16,
    fontWeight: 'Bold',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  largeButton: {
    margin: theme.spacing(1, 6, 1, 6),
  },
  centerButton: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
      <Grid container>
        <Grid item xs={12} sm={6} md={6} className={classes.captionBox}>
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

          {/* <br /> */}

          {/* <Typography variant="subtitle2" className={classNames(classes.caption, classes.hide)}>DOWNLOAD NOW ON</Typography>
          <Grid item xs={12} sm={6} md={6} className={classes.box}>
            <IconButton aria-label="appstore" className={classNames(classes.media, classes.appstore)} />
            <Typography variant="subtitle2" component="h6" className={classes.hide}>{<br />}</Typography>
            <IconButton aria-label="googleplay" className={classNames(classes.media, classes.googleplay)} />
          </Grid> */}

          <br />
          <br />
          <div className={classes.centerButton}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => handleClickOpen()}
            >
              <Typography
                className={classes.largeButton}
              >
                Get Started
          </Typography>
            </Button>
          </div>
          <SubscriberDialog open={open} setOpen={setOpen} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppBanner;
