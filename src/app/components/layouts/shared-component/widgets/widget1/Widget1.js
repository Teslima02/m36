import React from 'react';
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
  Avatar,
  Divider,
  Hidden,
} from '@material-ui/core';
import LensIcon from '@material-ui/icons/Lens';
import { makeStyles } from '@material-ui/core/styles';
// eslint-disable-next-line camelcase
import Ellipse_2 from '../../../../../images/landing_page/Ellipse_2.svg';
// eslint-disable-next-line camelcase
import Group_3172 from '../../../../../images/landing_page/Group_3172.png';
import iPhoneMockup from '../../../../../images/landing_page/iPhone-Mockup-Marcus.png';
import imageOne from '../../../../../images/landing_page/1.png';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(5),
      // paddingLeft: console.log(theme),
    },
  },
  header: {
    color: theme.palette.grey[100],
    padding: theme.spacing(0),
    textAlign: 'left',
  },
  link: {
    color: theme.palette.grey[400],
    padding: theme.spacing(0),
    '&:hover': {
      background: 'none',
      color: theme.palette.grey[100],
    },
  },
  W1HeaderWidth: {
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(3),
    },
  },
  W1Divider: {
    border: `3px solid ${theme.palette.primary.main}`,
    marginRight: '200px',
    opacity: 1,
    [theme.breakpoints.down('md')]: {
      border: `1px solid ${theme.palette.primary.main}`,
      marginLeft: '10px',
      marginRight: '10px',
    },
  },
  W1Header: {
    textAlign: 'left',
    fontWeight: 'Bold',
    fontSize: '66px/78px',
    letterSpacing: '-0.79px',
    color: theme.palette.primary.dark,
    opacity: 1,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      fontWeight: 'Bold',
      fontSize: ' 15px',
      letterSpacing: '-0.32px',
    },
  },
  W1ContentWidth: {
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(1),
    },
  },
  BulletImage: {
    opacity: 1,
    width: '20px',
    height: '20px',
    color: theme.palette.primary.main,
  },
  W1ListItemText: {
    textAlign: 'left',
    fontWeight: 'Bold',
    fontSize: '20px',
    letterSpacing: 0,
    color: theme.palette.primary.dark,
    opacity: 1,
    [theme.breakpoints.down('md')]: {
      fontSize: '10px',
    },
  },
  rightImage: {
    marginTop: '-130px',
    marginLeft: '-80px',
    display: 'flex',
    height: '1000px',
    opacity: 1,
    [theme.breakpoints.down('xs')]: {
      maxWidth: '280px',
      // display: 'flex',
      marginTop: '-60px',
      marginLeft: '-10px',
    },
  },
  floatImage: {
    opacity: 1,
    position: 'absolute',
    width: '200px',
    top: '1120px',
    left: '605px',
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      width: '170px',
      // top: '80px',
      left: '600px',
    },
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      width: '170px',
      top: '2020px',
      left: '2px',
    },
    [theme.breakpoints.down('xs')]: {
      position: 'absolute',
      width: '150px',
      top: '2025px',
      left: '40px',
    },
  },
}));

const Widget1 = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={12} md={6} sm={6}>
          <div className={classes.W1HeaderWidth}>
            <Divider variant="fullWidth" className={classes.W1Divider} />
            <Typography
              variant="h3"
              display="initial"
              align="left"
              className={classes.W1Header}
            >
              {"Personalized to meet you where you're at"}
            </Typography>
          </div>

          <div className={classes.W1ContentWidth}>
            <List>
            {/* LensIcon */}
              <ListItem>
                <ListItemAvatar>
                  <LensIcon className={classes.BulletImage} />
                </ListItemAvatar>
                <ListItemText
                  classes={{ primary: classes.W1ListItemText }}
                  primary="Earn more interest on your money"
                />
              </ListItem>
            </List>

            <List>
              <ListItem>
                <ListItemAvatar>
                  <LensIcon className={classes.BulletImage} />
                </ListItemAvatar>
                <ListItemText
                  primary="Tie your life goals, family goals and business projects to lucrative investment products to gain maximally."
                  classes={{ primary: classes.W1ListItemText }}
                />
              </ListItem>
            </List>

            <List>
              <ListItem>
                <ListItemAvatar>
                  <LensIcon className={classes.BulletImage} />
                </ListItemAvatar>
                <ListItemText
                  primary="All with the help of a Digital Concierge ready to guide you for reduced risk and better returns."
                  classes={{ primary: classes.W1ListItemText }}
                />
              </ListItem>
            </List>

            <List>
              <ListItem>
                <ListItemAvatar>
                  <LensIcon className={classes.BulletImage} />
                </ListItemAvatar>
                <ListItemText
                  primary="Create investment goals at the click of a button."
                  classes={{ primary: classes.W1ListItemText }}
                />
              </ListItem>
            </List>
          </div>
        </Grid>
        {/* <Grid item xs={12} md={6} sm={6}>
          <Hidden xlUp>
            <img
              alt="group"
              // eslint-disable-next-line camelcase
              src={Group_3172}
              className={classes.rightImage}
            />

            <img alt="imageOne" src={imageOne} className={classes.floatImage} />
          </Hidden>
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
};

export default Widget1;
