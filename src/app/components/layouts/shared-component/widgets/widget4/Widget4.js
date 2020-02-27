import React from 'react';
import {
    Box,
    Container,
    Grid,
    Grow,
    Typography,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Heart from './../../../../assets/heart.svg'
import Beach from './../../../../assets/beach.svg'
import Child from './../../../../assets/child.svg'
import Piggy from './../../../../assets/piggy.svg'
import Ring from './../../../../assets/ring.svg'

const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.grey[800],
        backgroundColor: theme.palette.grey[100],
        textAlign: 'center',
        flexGrow: 1,
        '& h3': {
            fontWeight: 700
        },
        '& h4': {
            fontWeight: 700
        },
        '& h6': {
            fontWeight: 700,
            // color: '#5C6E7D',
            lineHeight: '21px'
        }
    },
    header: {
        color: theme.palette.primary.dark,
        marginBottom: theme.spacing(1)
    },
    button: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.dark,
        padding: theme.spacing(1, 6),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[0],
        opacity: 1,
        marginTop: theme.spacing(2),
        textTransform: 'capitalize',
        fontSize: 16,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    },
    box: {
        display: 'flex',
        justifyContent: 'center', //'space-evenly',
        alignItems: 'center',
    },
    card: {
        width: 240,
        margin: theme.spacing(0, 1),
        '& button': {
            height: '260px',
        }
    },
    media: {
        height: '120px',
        width: '120px',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        margin: '30px auto',
        // paddingTop: '56.25%', // 16:9
    },
    content: {
        color: theme.palette.primary.dark,
    },
}));

const Widget4 = () => {
   const classes = useStyles();
   return (
        <React.Fragment>
            <Box className={classes.root} py={8}>
                <Container maxWidth="md">
                    <Grid container spacing={4} className={classes.box}>
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography align="center" variant="subtitle1" component="h3" className={classes.header}>START INVESTING NOW</Typography>
                            <Typography align="center" variant="h4" component="h4" className={classes.header}>What best describes you right now?</Typography>
                        </Grid>

                        <Grid item xs={6} sm={6} md={4} className={classes.box}>
                            <Grow in={true}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={Heart}
                                            title="Few Obligations"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" color="textSecondary" component="h6">
                                                Single with few obligations
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grow>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4} className={classes.box} color="textSecondary">
                            <Grow in={true}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={Ring}
                                            title="Few Obligations"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" color="textSecondary" component="h6">
                                                Married with no dependents
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grow>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4} className={classes.box}>
                            <Grow in={true}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={Child}
                                            title="Few Obligations"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" color="textSecondary" component="h6">
                                                Married with family
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grow>
                        </Grid>

                        <Grid item xs={6} sm={6} md={4} className={classes.box}>
                            <Grow in={true}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={Piggy}
                                            title="Few Obligations"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" color="textSecondary" component="h6">
                                                Preparing for retirement
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grow>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4} className={classes.box}>
                            <Grow in={true}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={Beach}
                                            title="Few Obligations"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" color="textSecondary" component="h6">
                                                Retired
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grow>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                            >
                                Get Started
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </React.Fragment>
   );
};

export default Widget4;