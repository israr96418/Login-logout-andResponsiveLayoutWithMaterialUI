import React from 'react'
import { Avatar, Container, Divider, ImageList, ImageListItem, Link, Typography } from '@material-ui/core'
// import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles'
import { AvatarGroup } from '@material-ui/lab';

import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({

    Container: {
        height: '100vh',
        paddingTop: theme.spacing(10),
        position: 'fixed',
        top: 0,

        [theme.breakpoints.up('sm')]: {
            backgroundColor: "white",
            color: '#555',
            border: '1px solid #ece7e7',
            marginTop: '2',

        }
    },

    root: {
        fontSize: 20,
        fontWeight: 500,
        color: '#555',
        // marginBottom:theme.spacing(1),


    },

    imagelist: {

    },

    AvatarGroup: {
        marginBottom: theme.spacing(2),
    },
    icons:{
        padding:10,
        marginRight:theme.spacing(1)
    },
    Link:{
        
        marginRight:theme.spacing(1)
    },

}));

function Rightbar() {
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.Container}>
                <Typography className={classes.root} gutterBottom>Online Friends</Typography>

                <AvatarGroup max={6} className={classes.AvatarGroup}>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="" >Ag</Avatar>
                    <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/6.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/7.jpg" />
                </AvatarGroup>


                <Typography className={classes.root} gutterBottom>Gallary</Typography>

                <ImageList cols={3} rowHeight={100} className={classes.imagelist}>
                    <ImageListItem>
                        <img src="https://material-ui.com/static/images/image-list/honey.jpg" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://material-ui.com/static/images/image-list/vegetables.jpg" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://material-ui.com/static/images/image-list/plant.jpg" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://material-ui.com/static/images/image-list/mushroom.jpg" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://material-ui.com/static/images/image-list/olive.jpg" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://material-ui.com/static/images/image-list/star.jpg" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://material-ui.com/static/images/image-list/bike.jpg" />
                    </ImageListItem>


                </ImageList>

                <Typography className={classes.root} gutterBottom style={{ marginTop: 20 }}>Category</Typography>

                <div className={classes.icons}>


                    <Link href="https://web.facebook.com/israr.dawar.758" target="_blank" className={classes.Link}>
                        <FacebookIcon />
                    </Link>

                    <Link href="https://github.com/israr96418/israr96418.github.io"  target="_blank" className={classes.Link}>
                        <GitHubIcon />
                    </Link>

                    <Link href="https://www.linkedin.com/in/israr-dawar-079926206/" target="_blank"   className={classes.Link}>
                        <LinkedInIcon />
                    </Link>



                    {/* Divider provide a thin line that groups content in list and layout */}
                    {/* <Divider flexItem/> */}
                   
                </div>



            </Container>
        </div>
    )
}

export default Rightbar
