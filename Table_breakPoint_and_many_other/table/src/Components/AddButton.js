
import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
    Fab, Tooltip, Modal, Container, form, TextField, Button, MenuItem,
    FormLabel, FormControl,
    FormControlLabel, Radio,
    RadioGroup,
    Snackbar
} from '@material-ui/core';


import { Add } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({

    fab: {
        position: "fixed",
        bottom: 20,
        right: 20,
    },

    modal: {

        position: 'absolute',
        width: 400,
        height: 450,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        margin: 'auto',
        [theme.breakpoints.down('xs')]: {
            width: '100vw',
            height: '100vh',
        }
    },
    item: {
        marginBottom: theme.spacing(3),
    },

    btns: {
        marginTop: '5px',
        marginRight: "20px",
    }
}));


function AddButton() {

    const classes = useStyles();

    const [Open, setOpen] = useState(false);
    const [OpenAlert, setOpenAlert] = useState(false);



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
    };

    return (
        <div>
            <Tooltip title="Add" aria-label="add">
                <Fab color="primary" className={classes.fab} onClick={() => setOpen(true)} >
                    <Add />
                </Fab>
            </Tooltip>

            <Modal open={Open}>

                <Container className={classes.modal}>
                    <form className={classes.form}>
                        <div className={classes.item}>
                            <TextField id="standard_basic1" label="Tile" placeholder="Enter Title" fullWidth />
                        </div>

                        <div className={classes.item}>
                            <TextField variant="outlined" id="standard_basic2" multiline row={6} label="Tell Your story" fullWidth />
                        </div>


                        <div className={classes.item}>
                            <TextField label="visibility" id="standard_basic3" select value="Public" >

                                <MenuItem value="publice">Public</MenuItem>
                                <MenuItem value="Private">Private</MenuItem>
                                <MenuItem value="Unlisted" >Unlisted</MenuItem>

                            </TextField>
                        </div>

                        <div className={classes.radiobtn}>

                            <FormControl component="fieldset">
                                <FormLabel component="legend">
                                    Who one are comments?

                                </FormLabel>
                                <RadioGroup>

                                    <FormControlLabel
                                        value="EveryBody"
                                        control={
                                            <Radio color="primary" />
                                        }
                                        label="EveryBody"
                                    />


                                    <FormControlLabel
                                        value="Only My Family"
                                        control={
                                            <Radio color="primary" />
                                        }
                                        label="Only My Family"
                                    />

                                    <FormControlLabel
                                        value="NoBody"
                                        control={
                                            <Radio color="primary" />
                                        }
                                        label="NoBody"
                                    />
                                </RadioGroup>

                            </FormControl>
                        </div>



                        <div >


                            <Button color="primary" variant="outlined" onClick={() => setOpenAlert(true)} className={classes.btns}  >
                                Create
                            </Button>


                            <Button color="secondary" variant="outlined" onClick={() => setOpen(false)} className={classes.btns}>
                                Cancel
                            </Button>
                        </div>

                    </form>

                </Container>
            </Modal>

            <Snackbar open={OpenAlert} autoHideDuration={4000} onClose={handleClose}
             anchorOrigin={{vertical: 'bottom', horizontal: 'left' }}
            >
                <Alert onClose={handleClose} severity="success">
                    Create Successfully!
                </Alert>
            </Snackbar>



        </div>

    )
}

export default AddButton
