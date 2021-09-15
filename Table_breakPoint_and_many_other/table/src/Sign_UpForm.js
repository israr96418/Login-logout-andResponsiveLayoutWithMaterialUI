import { Avatar, Grid, Paper, Typography, TextField, FormControlLabel, Checkbox, Button, Link, FormControl, FormLabel, Radio, RadioGroup } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '24vw',
        // height: '70vh',
        padding: '20px',
        margin: '20px auto',

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

    forgot: {
        margin: '10px 0'
    },

    radiogroups: {
        display: 'initial'
    },

    forcontrol:{
  margin:'6px 0'

    },
}));

function Sign_UpForm() {

    const classes = useStyles();
    return (
        <div>
            {/* <h1>LoginForm</h1> */}
            <Grid container>
                {/* elevation gaves shadow to the paper value is from 0 24 */}
                {/* <Paper elevation={10} className={classes.root}> */}
                <Paper className={classes.root}>

                    <Grid align="center">
                        <Avatar className={classes.green}><AddCircleOutlineIcon /></Avatar>


                        <Typography variant="h4" component="h2">
                            Sign Up
                        </Typography>
                        <Typography variant="caption" gutterBottom>
                            Fill this form correctly to create an account
                        </Typography>
                    </Grid>
                    <Grid className={classes.TextField}>

                        <TextField fullWidth label="Name" placeholder="Enter Name" required />
                        <TextField fullWidth label="Email" type="email" placeholder="Enter Email" required />

                        <FormControl component="fieldset"  className={classes.forcontrol}>

                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup  aria-label="gender" name="geneder" color="primary" className={classes.radiogroups}>
                                <FormControlLabel
                                value="Male"
                                    control={
                                        <Radio color="primary"/>
                                    }
                                    label="Male"
                                />

                                <FormControlLabel
                                value="Female"
                                    control={
                                        <Radio  color="primary" />
                                    }
                                    label="Female"
                                />
                            </RadioGroup>

                        </FormControl>
                        <TextField fullWidth label="Phone Number" placeholder="Enter Phone Number" required />
                        <TextField fullWidth label="Password" type="password" placeholder="Enter password" required />
                        <TextField fullWidth label="Confrom password" type="password" placeholder="Enter Confrom password" required />
                    </Grid>
                    <FormControlLabel

                        control={
                            <Checkbox
                                color="primary"
                                name="checkedb"
                            />

                        }
                        label="I accept the term and condition"
                    />

                    <Button className={classes.btn}
                        color="primary"
                        variant="contained"
                        fullWidth
                    >Sign Up</Button>

        

                </Paper>

            </Grid>

        </div>
    )
}

export default Sign_UpForm
