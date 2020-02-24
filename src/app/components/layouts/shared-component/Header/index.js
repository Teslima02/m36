import React, { useState } from 'react';
import { fade } from '@material-ui/core/styles';
import {
  withStyles,
  Container,
  AppBar,
  SwipeableDrawer,
  Typography,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Link,
} from '@material-ui/core';
import Mail from '@material-ui/icons/Mail';
import Menu from '@material-ui/icons/Menu';
import Home from '@material-ui/icons/Home';
import PersonAdd from '@material-ui/icons/PersonAdd';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AppBanner from './components/AppBanner';

const styles = theme => ({
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: theme.shadows[0],
    marginTop: theme.spacing(2),
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
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    marginRight: theme.spacing(6),
    color: '#FFFFFF',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    '&:hover': {
      textDecoration: 'none',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'none',
    color: theme.palette.common.white,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
    },
  },
  logo: {
    display: 'none',
    color: '#1F70C1',
    marginLeft: 50,
    font: '300 36px Bahnschrift',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
});

function Header(props) {
  const { classes } = props;

  const [state, setState] = useState({ open: false });

  const toggleDrawer = (open, status) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [open]: status });
  };

  const sideList = open => (
    <div
      className={classes.list}
      variant="persistent"
      anchor="left"
      role="presentation"
      open={open}
      onClick={toggleDrawer(open, false)}
      onKeyDown={toggleDrawer(open, false)}
    >
      <List>
        {['Home', 'About Us', 'Our Offerings', 'Wealth Management'].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <Home /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ),
        )}
      </List>
      <Divider />
      <List>
        {['Login', 'Sign Up'].map(text => (
          <ListItem button key={text}>
            <ListItemIcon>
              {text === 'Sign Up' ? <PersonAdd /> : <ExitToApp />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="absolute" color="inherit" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.logo} variant="h6" noWrap>
            M36NG
          </Typography>

          <div className={classes.grow} />

          {/* <div className={classes.sectionDesktop}>
            <Link className={classes.link} variant="body2" href="">
              Home
            </Link>
            <Link className={classes.link} variant="body2" href="">
              About Us
            </Link>
            <Link className={classes.link} variant="body2" href="">
              Our Offerings
            </Link>
            <Link className={classes.link} variant="body2" href="">
              Wealth Management
            </Link>
            <Link className={classes.link} variant="body2" href="">
              Login
            </Link>
            <Link className={classes.link} variant="body2" href="">
              Sign Up
            </Link>
          </div> */}

          {/* <IconButton
            onClick={toggleDrawer('open', true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Menu />
          </IconButton> */}
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        open={state.open}
        onClose={toggleDrawer('open', false)}
        onOpen={toggleDrawer('open', true)}
      >
        {sideList('open')}
      </SwipeableDrawer>

      <AppBanner />
    </div>
  );
}

export default withStyles(styles)(Header);
