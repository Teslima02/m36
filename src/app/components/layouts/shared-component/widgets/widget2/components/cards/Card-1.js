import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 280,
        minHeight: 220,
        position: 'absolute',
        top: -125,
        borderRadius: 10,
        padding: theme.spacing(4),
        [theme.breakpoints.down('md')]: {
            top: 0
        },
        '& p': {
            lineHeight: '30px',
            fontSize: '21px',
            fontWeight: 600,
            color: theme.palette.primary.dark,
            textAlign: 'left' 
        },
        '& h2': {
            fontSize: theme.typography.fontSize + 10,
            fontWeight: theme.typography.fontWeightBold
        },
        '& hr': {
            backgroundColor: theme.palette.primary.light,
            width: '60px',
            marginBottom: 5,
            height: 3,
        }
    },
}));

export default function AppCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.card}>
        <Typography gutterBottom variant="h4" component="h2">
            Investments
        </Typography>
        <Divider className={classes.divider}/>
        <Typography variant="subtitle1" color="textSecondary" component="p">
            Get served the choicest investment products on the market, personalized to meet your needs.
        </Typography>
    </Paper>
  );
}