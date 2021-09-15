import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(3),
    },

    media: {
        height: 300,
        [theme.breakpoints.down('sm')]: {
            height: 125,
        },
    },
}));


function Post() {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea >
                    <CardMedia className={classes.media} component="img"
                        image="https://thumbs.dreamstime.com/b/pink-card-making-composition-23340937.jpg"
                        title="MY First Post"
                    />
                </CardActionArea>


                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        This is my first real world project
                    </Typography>
                    <Typography variant="body2">
                        Digital Contact Card helps businesses and also individuals to make a great first impression with the most advanced way to share their contacts information, increase networking and get connected quickly comes with integrated NFC technology, which enables you to transmit your contact details, socials & so much more into any smartphone with no app needed.
                    </Typography>
                </CardContent>


                <CardActions>
                    <Button color='primary' size="small">
                        Search
                    </Button>
                    <Button color='primary' size="small">
                        Learn More
                    </Button>
                </CardActions>
            </Card>


            <Card className={classes.root}>
                <CardActionArea >
                    <CardMedia className={classes.media} component="img"
                        image="https://thumbs.dreamstime.com/b/making-children-s-greeting-card-flowers-mother-day-185435169.jpg"
                        title="MY First Post"
                    />
                </CardActionArea>


                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        This is my first real world project
                    </Typography>
                    <Typography variant="body2">
                        Digital Contact Card helps businesses and also individuals to make a great first impression with the most advanced way to share their contacts information, increase networking and get connected quickly comes with integrated NFC technology, which enables you to transmit your contact details, socials & so much more into any smartphone with no app needed.
                    </Typography>
                </CardContent>


                <CardActions>
                    <Button color='primary' size="small">
                        Search
                    </Button>
                    <Button color='primary' size="small">
                        Learn More
                    </Button>
                </CardActions>
            </Card>




            <Card className={classes.root}>
                <CardActionArea >
                    <CardMedia className={classes.media} component="img"
                        image="https://thumbs.dreamstime.com/b/pastel-card-making-composition-23887744.jpg"
                        title="MY First Post"
                    />
                </CardActionArea>


                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        This is my first real world project
                    </Typography>
                    <Typography variant="body2">
                        Digital Contact Card helps businesses and also individuals to make a great first impression with the most advanced way to share their contacts information, increase networking and get connected quickly comes with integrated NFC technology, which enables you to transmit your contact details, socials & so much more into any smartphone with no app needed.
                    </Typography>
                </CardContent>


                <CardActions>
                    <Button color='primary' size="small">
                        Search
                    </Button>
                    <Button color='primary' size="small">
                        Learn More
                    </Button>
                </CardActions>
            </Card>




            <Card className={classes.root}>
                <CardActionArea >
                    <CardMedia className={classes.media} component="img"
                        image="https://image.shutterstock.com/image-photo/scrap-booking-making-greeting-card-260nw-249939259.jpg"
                        title="MY First Post"
                    />
                </CardActionArea>


                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        This is my first real world project
                    </Typography>
                    <Typography variant="body2">
                        Digital Contact Card helps businesses and also individuals to make a great first impression with the most advanced way to share their contacts information, increase networking and get connected quickly comes with integrated NFC technology, which enables you to transmit your contact details, socials & so much more into any smartphone with no app needed.
                    </Typography>
                </CardContent>


                <CardActions>
                    <Button color='primary' size="small">
                        Search
                    </Button>
                    <Button color='primary' size="small">
                        Learn More
                    </Button>
                </CardActions>
            </Card>



            <Card className={classes.root}>
                <CardActionArea >
                    <CardMedia className={classes.media} component="img"
                        image="data:image/jpeg;base64,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"
                        title="MY First Post"
                    />
                </CardActionArea>


                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        This is my first real world project
                    </Typography>
                    <Typography variant="body2">
                        Digital Contact Card helps businesses and also individuals to make a great first impression with the most advanced way to share their contacts information, increase networking and get connected quickly comes with integrated NFC technology, which enables you to transmit your contact details, socials & so much more into any smartphone with no app needed.
                    </Typography>
                </CardContent>


                <CardActions>
                    <Button color='primary' size="small">
                        Search
                    </Button>
                    <Button color='primary' size="small">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Post
