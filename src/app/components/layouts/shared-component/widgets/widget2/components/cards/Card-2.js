import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 400,
        minHeight: 220,
        position: 'absolute',
        top: 190,
        left: 515,
        borderRadius: 10,
        padding: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            top: 290,
            left: 100,
            maxWidth: 350,
            minHeight: 220,
            padding: theme.spacing(1, 4, 4, 4),
        },
        '& p': {
            lineHeight: '30px',
            fontSize: '24px',
            fontWeight: 600,
            color: theme.palette.primary.dark,
            textAlign: 'left',
            marginTop: 30,
        },
        '& h2': {
            fontSize: theme.typography.fontSize + 17,
            fontWeight: theme.typography.fontWeightBold,
            [theme.breakpoints.down('md')]: {
                marginTop: 30,
            },
        },
        '& hr': {
            backgroundColor: theme.palette.primary.light,
            width: '60px',
            height: 3,
        }
    },
    head: {
        color: theme.palette.primary.main,
    },
}));

export default function AppCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.card}>
        <Typography gutterBottom variant="h4" component="h2" className={classes.head}>
            Lifestyle
        </Typography>
        <Divider className={classes.divider}/>
        <Typography variant="subtitle1" color="textSecondary" component="p">
            Access premium experiences and exclusive investments centred around your life and interests.
        </Typography>
    </Paper>
  );
}