import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    marginBottom: theme.spacing(4),
  },
  header: {
    color: theme.palette.grey[100],
    padding: theme.spacing(0),
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}));

const Copyright = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12} sm={6} md={3} className={classes.footer}>
        <Typography variant="body2" className={classes.header}>
          {`Copyright © ${new Date().getFullYear()} M36NG`}
        </Typography>
      </Grid>
    </React.Fragment>
  );
};

export default Copyright;
