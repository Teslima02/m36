import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  header: {
    color: theme.palette.grey[100],
    padding: theme.spacing(0),
  },
}));

const Copyright = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12} className={classes.footer}>
        <Typography variant="body2" align="left" className={classes.header}>
          {`Copyright © ${new Date().getFullYear()} M36NG`}
        </Typography>
      </Grid>
    </React.Fragment>
  );
};

export default Copyright;
