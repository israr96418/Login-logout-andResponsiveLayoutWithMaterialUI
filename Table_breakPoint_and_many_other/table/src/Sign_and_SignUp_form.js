import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Paper, Tabs, Tab,Box,Typography } from '@material-ui/core';
import LoginForm from './LoginForm';
import Sign_UpForm from './Sign_UpForm';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '25vw',
    //    height:'60vh',
        // padding:'10px 0'
        margin: '20px auto'
    },
}));



function Sign_and_SignUp_form() {

    const [state, setstate] = useState(1)
    const classes = useStyles();

const handleForm = (e,value)=>{
    // console.log(val)
    setstate(value)
}



    return (
        <div>
            <Paper elevation={20} className={classes.root}>
                <Tabs
                    value={state}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleForm}
                    aria-label="disabled tabs example"
                >


                    <Tab label="Sign in" />
                    <Tab label="Sign Up" />
                </Tabs>
            </Paper>

            <TabPanel value={state} index={0} >
          <LoginForm/>
        </TabPanel>
        <TabPanel value={state} index={1} >
          <Sign_UpForm/>
        </TabPanel>

        </div>
    )
}


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  





























// function Sign_and_SignUp_form() {

//     const [state, setstate] = useState(1)

//     const classes = useStyles();


// const handleForm = (e,value)=>{
//     // console.log(val)
//     setstate(value)
// }



//     return (
//         <div>
//             <Paper elevation={20} className={classes.root}>
//                 <Tabs value={state} indicatorColor="primary"  textColor="primary"  onChange={handleForm}>
//                     <Tab label="Sign in" />
//                     <Tab label="Sign Up" />
//                 </Tabs>
//             </Paper>

//           <TabePanle value={state} index={0}><LoginForm/></TabePanle>
//           <TabePanle   value={state} index={1}><Sign_UpForm/> </TabePanle>


//         </div>
//     )
// }



export default Sign_and_SignUp_form
