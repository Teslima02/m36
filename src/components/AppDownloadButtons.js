import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import classNames from 'classnames'
import {Box, Grid, Typography, IconButton} from '@material-ui/core'
import Appstore from './assets/appstore.jpg'
import Googleplay from './assets/googleplay.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    media: {
        width: '145px',
        height: '43px',
        borderRadius: 0,
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        [theme.breakpoints.down('md')]: {
            zoom: 1.5
        },
    },
    appstore: {
        backgroundImage: `url(${Appstore})`,
    },
    googleplay: {
        backgroundImage: `url(${Googleplay})`
    },
    caption: {
        color: theme.palette.primary.main,
        textTransform: 'uppercase',
        fontSize: theme.typography.fontSize
    },
    hide: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    box: {
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            justifyContent: 'center', //'space-evenly',
            alignItems: 'center',
        }
    },
    header: {
        display: 'none',
        justifyContent: 'center',
        fontWeight: 800,
        margin: theme.spacing(5,0),
        color: theme.palette.primary.main,
        [theme.breakpoints.down('md')]: {
           display: 'flex'
        }
    }
}));

const AppDownloadButton = () => {
  const classes = useStyles();

    return (
        <React.Fragment>
            <Typography gutterBottom variant="h4" component="h2" className={classes.header}>
                DOWNLOAD NOW ON
            </Typography>
            
            <Grid container className={classes.root}>
                <Grid item xs={12} sm={6} md={6}></Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={6} className={classes.box}>
                            <Box>
                                <Typography variant="subtitle2" className={classNames(classes.caption, classes.hide)}>DOWNLOAD NOW ON</Typography>
                                <IconButton aria-label="appstore" className={classNames(classes.media, classes.appstore)} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} className={classes.box}>
                            <Box>
                                <Typography variant="subtitle2" component="h6" className={classes.hide}>{<br/>}</Typography>
                                <IconButton aria-label="googleplay" className={classNames(classes.media, classes.googleplay)} />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default AppDownloadButton;
