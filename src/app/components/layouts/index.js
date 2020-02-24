import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container, Grid, MuiThemeProvider } from '@material-ui/core';
import Widget1 from './shared-component/widgets/widget1/Widget1';
import Widget2 from './shared-component/widgets/widget2/Widget2';
import Widget3 from './shared-component/widgets/widget3/Widget3';
import Widget4 from './shared-component/widgets/widget4/Widget4';
import Header from './shared-component/Header';
import Footer from './shared-component/Footer';
import themeConfig from './../../config/themeConfig'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}))
function Layout() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={themeConfig}>
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
            <Footer />
        </div>
    </MuiThemeProvider>
  );
}

export default Layout;
