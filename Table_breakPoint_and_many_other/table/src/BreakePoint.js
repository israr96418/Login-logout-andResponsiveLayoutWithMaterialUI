import React from 'react'
import { makeStyles,useTheme } from '@material-ui/core/styles'
import { Button, Grid, TextField, useMediaQuery } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root:{
     width:400,
     [theme.breakpoints.down('xs')]:{
         width:200,
      }
    },
    contaner:{
        width:'100vw',
        height:'100vh',
    },
 
    btn:{
        width:'10vw',
        height:'8.5vh'
    },

}));

function BreakePoint() {

    const classes = useStyles();

    const theme =useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('xs'));
   console.log(matches);

    return (
        <div className={classes.contaner}>
            <Grid container
            // justify='center'
            alignItems={matches ? 'flex-end': 'center'}
            >
                <Grid item >
                    <TextField
                    className={classes.root}
                    variant="outlined"
                    label="Enter Your name"
                    />
                </Grid>
                <Grid item>
                    <Button  
                    className={classes.btn}
                    color="primary"
                    variant="contained"
                    size="large"
                    >
                        Click me
                    </Button>
                    </Grid>

            </Grid>
        </div>
    )
}

export default BreakePoint
