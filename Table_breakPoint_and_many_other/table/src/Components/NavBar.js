import { AppBar, Badge, InputBase, Toolbar, Typography,Avatar } from '@material-ui/core'

import MailIcon from '@material-ui/icons/Mail';
import Notifications from '@material-ui/icons/Notifications';
import React,{useEffect, useState} from 'react'
import { makeStyles, alpha } from '@material-ui/core/styles'

// import SearchIcon from '@material-ui/icons/Search';
import Search from '@material-ui/icons/Search';
import { Cancel } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        justifyContent: "space-between",

    },

    longlogo: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    shortlogo: {

        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },

    },
    

    search: {

        display: 'flex',
        alignItems: 'center',
        color: 'white',
        
        // marginTop:'3px',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.30)
        },

        borderRadius: theme.shape.borderRadius,
        width: '50%',
        display: 'block',
        [theme.breakpoints.down('xs')]: {
            // display: 'none',
          display: (props) => (props.open ? "flex" : "none"),
          width:"50%",
        },
    },

    input: {
        color: 'white',
       marginLeft: theme.spacing(2),
       padding:'2px',
     
    },

    searchbtnleft:{
        marginRight: theme.spacing(2),

        [theme.breakpoints.up('sm')]:{
            display:"none",
           
        }        

    },

    icon: {
       
        alignItems:'center',
       
            // display: 'none',
          display: (props) => (props.open ? "none" : "flex"),


    },

    cancel:{
        [theme.breakpoints.up("sm")]:{
            display:'none',
        }
    },

    bedge:{
   marginRight:theme.spacing(2),
    },



}));

function NavBar() {

    const [open, setopen] = useState(false);

    const classes = useStyles( {open} );

   


    return (
        <AppBar position={'fixed'}>
            <Toolbar className={classes.root}>
                <Typography variant="h6" className={classes.longlogo}   >
                    Lamma Dev
                </Typography>

                <Typography variant="h6" className={classes.shortlogo}   >
                    LAMA
                </Typography>
 
                <div className={classes.search}>
                    <Search className={classes.searchbtnright}/>
                    <InputBase placeholder="Search here..." className={classes.input} />
                    <Cancel className={classes.cancel}  onClick={()=>setopen(false)}/>
                </div>

                <div className={classes.icon}>

                    <Search  className={classes.searchbtnleft} onClick={()=>setopen(true)}/>
                    
                    <Badge badgeContent={4} color="primary" className={classes.bedge}>
                    {/* <Badge badgeContent={100} color="primary"> */}
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="secondary" className={classes.bedge}>
                    {/* <Badge badgeContent={1000} max={999} color="secondary"> */}
                       <Notifications/>
                    </Badge>
                    <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                    
                </div>
            </Toolbar>

        </AppBar>
    )
}

export default NavBar
