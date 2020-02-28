import React from 'react';
import {
  Grid,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.grey[400],
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
  }
}));

const Widget1 = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12} sm={6} md={3} className={classes.root}>
        <List
          component="nav"
          aria-label="secondary footer nav"
          dense
          subheader={
            <ListSubheader
              className={classes.header}
              component="h2"
              id="nested-list-subheader"
            >
              INFORMATION
            </ListSubheader>
          }
        >
          {/* <ListItem button className={classes.link} component="a">
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem button className={classes.link} component="a">
            <ListItemText primary="Privacy Policy" />
          </ListItem>
          <ListItem button className={classes.link} component="a">
            <ListItemText primary="Terms & Conditions" />
          </ListItem> */}
        </List>
      </Grid>
    </React.Fragment>
  );
};

export default Widget1;
