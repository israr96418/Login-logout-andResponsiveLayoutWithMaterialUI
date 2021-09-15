import logo from './logo.svg';
import './App.css';
import Table from './Table';
import BreakePoint from './BreakePoint';
import Date_and_Time_picker from './Date_and_Time_picker';
import LoginForm from './LoginForm';
import Sign_UpForm from './Sign_UpForm';
import Sign_and_SignUp_form from './Sign_and_SignUp_form';
import NavBar from './Components/NavBar';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Leftbat from './Components/Leftbat';
import Feed from './Components/Feed';
import Rightbar from './Components/Rightbar';
import AddButton from './Components/AddButton';


const useStyles = makeStyles((theme) => ({
  rightNavbar: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  }
}));



function App() {

  const classes = useStyles();
  return (
    <div className="App">
      {/* <Table/> */}
      {/* <BreakePoint/> */}
      {/* <Date_and_Time_picker/> */}
      {/* <LoginForm/> */}
      {/* <Sign_UpForm/> */}
      {/* <Sign_and_SignUp_form/> */}



      {/* Responsive Material UI project start from here */}
      <NavBar />
      <Grid container>

        <Grid item sm={2} xs={2}>
          <Leftbat />
        </Grid>


        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>


        <Grid item sm={3} className={classes.rightNavbar}>
          <Rightbar />
        </Grid>
      </Grid>
      <AddButton/>


    </div>
  );
}

export default App;
