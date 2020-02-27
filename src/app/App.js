import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Layout from './components/layouts'
import { withFirebase } from './components/Firebase';
import '../styles/App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // color: console.log(theme, "Theme")
  }
}))
function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Layout />
    </React.Fragment>
  );
}

export default withFirebase(App);
