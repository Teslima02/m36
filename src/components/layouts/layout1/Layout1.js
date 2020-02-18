import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const drawerWidth = 320;
const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#F5F5F5',
    [theme.breakpoints.up('sm')]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(5),
    margin: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(5),
      margin: theme.spacing(4),
    },
  },
});

// eslint-disable-next-line react/prefer-stateless-function
class Layout1 extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />

        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <Header />
          </Grid>
        </Grid>

        <Sidebar />

        <Grid container className={classes.root}>
          <Grid item xs={12} sm={12} md={12}>
            <main className={classes.content}>{this.props.children}</main>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Layout1);
