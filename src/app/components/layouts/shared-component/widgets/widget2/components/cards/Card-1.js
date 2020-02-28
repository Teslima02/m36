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
        top: -125,
        left: 130,
        borderRadius: 10,
        padding: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            top: 0,
            left: 15,
            maxWidth: 400,
            minHeight: 220,
            padding: theme.spacing(4),
        },
        '& p': {
            lineHeight: '30px',
            fontSize: '24px',
            fontWeight: 600,
            color: theme.palette.grey[500],
            textAlign: 'left',
            marginTop: 30,
            [theme.breakpoints.down('md')]: {
                marginTop: 30,
            },
        },
        '& h2': {
            fontSize: theme.typography.fontSize + 17,
            fontWeight: theme.typography.fontWeightBold
        },
        '& hr': {
            backgroundColor: theme.palette.primary.light,
            width: '60px',
            marginBottom: 5,
            height: 3,
        }
    },
    head: {
        color: theme.palette.primary.dark,
    },
}));

export default function AppCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.card}>
        <Typography gutterBottom variant="h4" component="h2" className={classes.head}>
            Investments
        </Typography>
        <Divider className={classes.divider}/>
        <Typography variant="subtitle1" color="textSecondary" component="p">
            Get served the choicest investment products on the market, personalized to meet your needs.
        </Typography>
    </Paper>
  );
}