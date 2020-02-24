import React from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Beautiful from './../../../../assets/beautiful.jpg';
import AppCard1 from './components/cards/Card-1';
import AppCard2 from './components/cards/Card-2';
import AppCard3 from './components/cards/Card-3';
import AppDownloadButtons from './components/AppDownloadButtons';

const useStyles = makeStyles(theme => ({
   root: {
      flexGrow: 1,
      backgroundColor: theme.palette.grey[100],
      '& h6': {
         fontWeight: 700
      }
   },
   banner: {
      minHeight: '768px',
      backgroundImage: `url(${Beautiful})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      position: 'relative',
      [theme.breakpoints.down('md')]: {
         background: 'none',
         padding: theme.spacing(54, 0),
         // marginTop: 150,
      },
   },
   header: {
      display: 'none',
      justifyContent: 'center',
      fontWeight: 800,
      margin: theme.spacing(5,0),
      color: theme.palette.secondary.dark,
      [theme.breakpoints.down('md')]: {
         display: 'flex',
      }
   }
}));

const Widget2 = () => {
   const classes = useStyles();
   return (
      <React.Fragment>
         <Box className={classes.root} py={4}>
            <Container maxWidth="md">
               <AppDownloadButtons />
            </Container>
         </Box>

         <Box>
            <Typography gutterBottom variant="h4" component="h2" className={classes.header}>
               What We Offer
            </Typography>

            <Box className={classes.banner} py={2}>
               <Container maxWidth="md">
                  <Grid container spacing={2}>
                     <Grid item xs={12} sm={12} md={12}>
                        <AppCard1 />
                        <AppCard2 />
                        <AppCard3 />
                     </Grid>
                  </Grid>
               </Container>
            </Box>
         </Box>
      </React.Fragment>
   );
};

export default Widget2;
