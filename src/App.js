import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container, Grid } from '@material-ui/core';
import './App.css';
import Widget1 from './components/Widget1';
import Widget2 from './components/Widget2';
import Widget3 from './components/Widget3';
import Widget4 from './components/Widget4';
import Header from './components/Header';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(6),
    border: theme.spacing(2),
  }}))
function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content=""
          />
        </Helmet>
        
        <Header />
        <Widget1 />
        <Widget2 />
        <Widget3 />
        <Widget4 />
      </div>
    </React.Fragment>
  );
}

export default App;
