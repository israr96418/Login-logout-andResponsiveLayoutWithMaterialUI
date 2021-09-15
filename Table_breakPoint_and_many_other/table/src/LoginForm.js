import { Avatar, Grid, Paper, Typography, TextField, FormControlLabel, Checkbox, Button,Link } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '25vw',
        height: '64vh',
        padding: '20px',
        // margin: '20px auto',
        margin: '0 auto',

    },
    green: {
        background: 'green',
    },
    desiging: {

    },

    TextField: {
        margin: '10px',
    },

    btn: {
        margin: '10px 0'
    },

    forgot:{
        margin:'10px 0'
    }
}));

function LoginForm() {

    const classes = useStyles();
    return (
        <div>
            {/* <h1>LoginForm</h1> */}
            <Grid container>
                {/* elevation gaves shadow to the paper value is from 0 24 */}

                {/* <Paper elevation={10} className={classes.root}> */}
                <Paper  className={classes.root}>

                    <Grid align="center">
                        <Avatar className={classes.green}><LockOpenOutlinedIcon /></Avatar>


                        <Typography variant="h4" component="h2">
                            Sign in
                        </Typography>
                    </Grid>
                    <Grid className={classes.TextField}>

                        <TextField fullWidth label="username" placeholder="Enter username" required />
                        <TextField fullWidth label="password" type="password" placeholder="Enter password" required />
                    </Grid>
                    <FormControlLabel

                        control={
                            <Checkbox
                                color="primary"
                                name="checkedb"
                            />

                        }
                        label="Remember me"
                    />

                    <Button className={classes.btn}
                        color="primary"
                        variant="contained"
                        fullWidth
                    >Sign in</Button>

    {/* with the help of link we can easily costamized oue anchor element with theme and typography
    always the color of the link is primary and variant=inherit
    */}
                    {/* <Grid className={classes.forgot}> */}
                    <Typography className={classes.forgot}>
                        <Link href="#">Forgot Password</Link>
                    </Typography>

                    <Typography> Do you have an account?
                        <Link href="#">Sign Up</Link>
                    </Typography>
                    {/* </Grid> */}

                </Paper>

            </Grid>

        </div>
    )
}

export default LoginForm
