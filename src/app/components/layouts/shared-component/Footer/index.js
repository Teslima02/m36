import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Copyright from './components/Copyright';
import Widget1 from './components/Widget1';
import Widget2 from './components/Widget2';
import Widget3 from './components/Widget3';
import Widget4 from './components/Widget4';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.dark,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    display: 'flex',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Container component="main" maxWidth="md">
          <Grid container spacing={3} className={classes.main}>
            <Widget1 />
            <Widget2 />
            <Widget3 />
            <Widget4 />
          </Grid>

          <Copyright />
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Footer;
