import React from 'react';
import {
   Box,
   Container,
   Grid,
   Typography,
   Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {darken, lighten} from '@material-ui/core/styles/colorManipulator';
import Chart from './assets/chart.svg'

const useStyles = makeStyles(theme => ({
   root: {
      color: theme.palette.secondary.dark,
      background: theme.palette.common.white,
      flexGrow: 1,
      '& h3, & h5': {
         fontWeight: 700
      },
      [theme.breakpoints.down('md')]: {
         textAlign: 'center'
      }
   },
   header: {
      color: theme.palette.secondary.dark,
      marginTop: theme.spacing(3),
      fontWeight: 900,
      [theme.breakpoints.down('md')]: {
         fontSize: theme.typography.fontSize + 15
      }
   },
   content: {
      color: theme.palette.grey[800],
      marginBottom: theme.spacing(3),
      fontWeight: 600
   },
   button: {
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(1, 6),
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[0],
      marginTop: theme.spacing(4),
      textTransform: 'capitalize',
      fontSize: theme.typography.htmlFontSize,
      '&:hover': {
        backgroundColor: darken(theme.palette.primary.main, 0.1)
      }
   },
   chart: {
      height: '320px',
      margin: '0 auto',
      display: 'flex',
   }
}));

const Widget3 = () => {
   const classes = useStyles();
   return (
      <React.Fragment>
         <Box className={classes.root} py={8}>
            <Container maxWidth="md">
               <Grid container spacing={4}>
                  <Grid item xs={12} sm={12} md={12}>
                     <Typography variant="h3" component="h3" className={classes.header}>Investing made easy.</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                     <img className={classes.chart} src={Chart} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                     <Box>
                        <Typography variant="h6" className={classes.content}>
                           Leveraging AI and industry expertise, our mobile app gives you a one-way pathway to increasing your net-worth, living well and accomplishing your goals.
                        </Typography>
                     </Box>

                     <Box my={6}>
                        <Typography variant="h6" className={classes.content}>
                           Get started in less than 5 minutes.
                        </Typography>

                        <Button
                           variant="contained"
                           color="secondary"
                           className={classes.button}
                        >
                           Get Started
                        </Button>
                     </Box>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12}>
                     <Typography align="center" variant="h5" component="h5">
                        Keep track of your investments as they grow
                     </Typography>
                  </Grid>
               </Grid>
            </Container>
         </Box>
      </React.Fragment>
   );
};

export default Widget3;