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
        bottom: 0,
        borderRadius: 10,
        padding: theme.spacing(4),
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
            width: '90px',
            height: 3,
        }
    },
}));

export default function AppCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.card}>
        <Typography gutterBottom variant="h4" component="h2">
            Investment Advisors
        </Typography>
        <Divider className={classes.divider}/>
        <Typography variant="subtitle1" color="textSecondary" component="p">
            Get connected with a personal concierge to help you gain the most out of your investments.
        </Typography>
    </Paper>
  );
}