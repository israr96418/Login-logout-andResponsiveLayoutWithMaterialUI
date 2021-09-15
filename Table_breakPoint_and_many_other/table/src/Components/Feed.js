import { Container } from '@material-ui/core'
import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Post from './Post';


const useStyles =  makeStyles((theme)=>({

    Container:{
        paddingTop:theme.spacing(10)
    }

}));


function Feed() {

    const classes = useStyles();
    return (
        <Container className={classes.Container}>
            <Post/>
            {/* <Post/>
            <Post/>
            <Post/>
            <Post/> */}
        </Container>
    )
}

export default Feed
