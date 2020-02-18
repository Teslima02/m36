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
        top: 168,
        left: 280,
        [theme.breakpoints.down('md')]: {
            top: 280,
            left: 140,
        },
        borderRadius: 10,
        padding: theme.spacing(4),
        '& p': {
            lineHeight: '30px',
            fontSize: '21px',
            fontWeight: 600,
            color: '#5C6E7D',
            textAlign: 'left' 
        },
        '& h2': {
            fontSize: theme.typography.fontSize + 10,
            fontWeight: theme.typography.fontWeightBold
        },
        '& hr': {
            backgroundColor: '#A8BF54',
            width: '60px',
            height: 3,
        }
    },
}));

export default function AppCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.card}>
        <Typography gutterBottom variant="h4" component="h2">
            Lifestyle
        </Typography>
        <Divider className={classes.divider}/>
        <Typography variant="subtitle1" color="textSecondary" component="p">
            Access premium experiences and exclusive investments centred around your life and interests.
        </Typography>
    </Paper>
  );
}