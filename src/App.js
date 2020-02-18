import React from 'react';
import { Helmet } from 'react-helmet';
import { CssBaseline, Container } from '@material-ui/core';
import './App.css';
import Widget1 from './components/Widget1';
import Widget2 from './components/Widget2';
import Widget3 from './components/Widget3';
import Widget4 from './components/Widget4';
import Layout from './components/layouts/layout1/Layout1';

function App() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Helmet>
            <title>Home Page</title>
            <meta
              name="description"
              content="A React.js Boilerplate application homepage"
            />
          </Helmet>
          {/* <Widget1 /> */}
        </Container>
  
        <Widget1 />
        <Widget2 />
        <Widget3 />
        <Widget4 />
      </React.Fragment>
    );
}

export default App;
