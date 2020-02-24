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

const Widget4 = () => {
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
              CONTACT US
            </ListSubheader>
          }
        >
          <ListItem button className={classes.link} component="a">
            <ListItemText primary="+234 10 235 8000" />
          </ListItem>
          <ListItem button className={classes.link} component="a">
            <ListItemText primary="admin@blue.com" />
          </ListItem>
        </List>
      </Grid>
    </React.Fragment>
  );
};

export default Widget4;
