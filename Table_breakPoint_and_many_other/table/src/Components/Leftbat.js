import { Container, Typography } from '@material-ui/core'
import React from 'react'

import { makeStyles } from '@material-ui/core/styles'


import {
    Bookmark,
    List,
    ExitToApp,
    Home,
    Person,
    PhotoCamera,
    PlayCircleOutline,
    Settings,
    Storefront,
    TabletMac,
  } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    Container: {
        height: '100vh',
        // marginTop: theme.spacing(8),
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
         top: 0,
         position: "sticky",

        [theme.breakpoints.up('sm')]: {
            backgroundColor: "white",
            color: '#555',
            border: '1px solid #ece7e7',
            marginTop: '2',

        }


    },
    item: {

        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(4),

        [theme.breakpoints.up('sm')]: {

            marginBottom: theme.spacing(3),
            cursor: 'pointer',

        }
    },
    icon: {
        marginRight:theme.spacing(1),
        [theme.breakpoints.up('sm')]:{
            fontSize:'18px',
        },
    },

    txt: {
        fontWeight:500,
        [theme.breakpoints.down('sm')]:{
            display:'none',
        }
    },
}));

function Leftbat() {
    const classes = useStyles();
    return (
        <Container className={classes.Container}>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.txt}>Home page</Typography>
            </div>

            <div className={classes.item}>
                <Person className={classes.icon} />
                <Typography className={classes.txt}>Friends</Typography>
            </div>


            <div className={classes.item}>
                <List className={classes.icon} />
                <Typography className={classes.txt}>Lists</Typography>
            </div>


            <div className={classes.item}>
                <PhotoCamera className={classes.icon} />
                <Typography className={classes.txt}>Camera</Typography>
            </div>



            <div className={classes.item}>
                <PlayCircleOutline className={classes.icon} />
                <Typography className={classes.txt}>Videos</Typography>
            </div>


            <div className={classes.item}>
                <TabletMac className={classes.icon} />
                <Typography className={classes.txt}>Apps</Typography>
            </div>

            <div className={classes.item}>
                <Bookmark className={classes.icon} />
                <Typography className={classes.txt}>Collections</Typography>
            </div>

            <div className={classes.item}>
                <Storefront className={classes.icon} />
                <Typography className={classes.txt}>Market Place</Typography>
            </div>

            <div className={classes.item}>
                <Settings className={classes.icon} />
                <Typography className={classes.txt}>Settings</Typography>
            </div>

            <div className={classes.item}>
                <ExitToApp className={classes.icon} />
                <Typography className={classes.txt}>Logout</Typography>
            </div>

        </Container>
    )
}

export default Leftbat
