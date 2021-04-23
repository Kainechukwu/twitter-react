import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import TwitterIcon from '@material-ui/icons/Twitter';


// ----------------------------COPYRIGHT------------------------------------

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Twitter
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// ----------------------------USE STYLES------------------------------------
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    month: {
        margin: theme.spacing(0, 2, 0, 0),
        minWidth: 200,

    },
    dayNyear: {
        minWidth: 70,
        margin: theme.spacing(0, 1, 0, 0),
        left: "15px"
    },
    day: {
        minWidth: 70,
        margin: theme.spacing(0, 1, 0, 0),
        left: "30px"
    },
    twitter: {
        margin: theme.spacing(1),
        color: "rgba(29,161,242,1.00)",
        fontSize: "45px"
    }

}));

// ----------------------------SIGNUP------------------------------------
export default function SignUp() {
    const classes = useStyles();


    // ----------------------------USE STATE------------------------------------

    const [signup, setSignup] = React.useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        month: "",
        day: "",
        year: ""
    });


    // ----------------------------YEARS ARRAY------------------------------------
    const years = [];
    const validYear = (new Date().getFullYear() - 18);
    const oldestYear = validYear - 100;
    for (let i = validYear; i >= oldestYear; i--) {
        years.push(i);
    }

    // ----------------------------MONTHS ARRAY------------------------------------
    const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // ----------------------------DAYS ARRAY------------------------------------
    const days = [];
    for (let i = 1; i <= 31; i++) {
        days.push(i);
    }


    // ----------------------------HANDLE CHANGE------------------------------------

    function handleChange(event) {
        const { name, value } = event.target;


        setSignup(prevValue => {
            if (name === "firstName") {
                return {
                    firstname: value,
                    lastname: prevValue.lastname,
                    username: prevValue.username,
                    password: prevValue.password,
                    month: prevValue.month,
                    day: prevValue.day,
                    year: prevValue.year
                }
            } else if (name === "lastName") {
                return {
                    firstname: prevValue.firstname,
                    lastname: value,
                    username: prevValue.username,
                    password: prevValue.password,
                    month: prevValue.month,
                    day: prevValue.day,
                    year: prevValue.year
                }
            } else if (name === "email") {
                return {
                    firstname: prevValue.firstname,
                    lastname: prevValue.lastname,
                    username: value,
                    password: prevValue.password,
                    month: prevValue.month,
                    day: prevValue.day,
                    year: prevValue.year
                }
            } else if (name === "password") {
                return {
                    firstname: prevValue.firstname,
                    lastname: prevValue.lastname,
                    username: prevValue.username,
                    password: value,
                    month: prevValue.month,
                    day: prevValue.day,
                    year: prevValue.year
                }
            } else if (name === "month") {
                return {
                    firstname: prevValue.firstname,
                    lastname: prevValue.lastname,
                    username: prevValue.username,
                    password: prevValue.password,
                    month: value,
                    day: prevValue.day,
                    year: prevValue.year
                }
            } else if (name === "day") {
                return {
                    firstname: prevValue.firstname,
                    lastname: prevValue.lastname,
                    username: prevValue.username,
                    password: prevValue.password,
                    month: prevValue.month,
                    day: value,
                    year: prevValue.year
                }
            } else if (name === "year") {
                return {
                    firstname: prevValue.firstname,
                    lastname: prevValue.lastname,
                    username: prevValue.username,
                    password: prevValue.password,
                    month: prevValue.month,
                    day: prevValue.day,
                    year: value
                }
            }
        });
    };



    // ----------------------------CREATE YEAR------------------------------------
    function createAge(age) {
        return (<MenuItem key={age} value={age}>{age}</MenuItem>)
    }


    // ----------------------------CREATE DAY------------------------------------
    function submitDetails(event) {

        console.log(signup);

        
        axios({
            method: "POST",
            data: login,
            withCredentials: true,
            url: "http://localhost:3000/signup"

        }).then(response => {
            console.log(response);
        });

        event.preventDefault();
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <TwitterIcon className={classes.twitter}></TwitterIcon>

                <Typography component="h1" variant="h5">
                    Sign up
        </Typography>
                <form onSubmit={submitDetails} className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                value={signup.firstname}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                value={signup.lastname}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={signup.username}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={signup.password}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <FormControl variant="outlined" className={classes.month}>
                                <InputLabel id="demo-simple-select-outlined-label">Month</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={signup.month}
                                    onChange={handleChange}
                                    label="Month"
                                    name="month"
                                >

                                    {months.map(createAge)}



                                </Select>
                            </FormControl>

                            <FormControl variant="outlined" className={classes.dayNyear}>
                                <InputLabel id="demo-simple-select-outlined-label">Day</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={signup.day}
                                    onChange={handleChange}
                                    label="Day"
                                    name="day"
                                >

                                    {days.map(createAge)}



                                </Select>
                            </FormControl>

                            <FormControl variant="outlined" className={classes.day}>
                                <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={signup.year}
                                    onChange={handleChange}
                                    label="Year"
                                    name="year"
                                >

                                    {years.map(createAge)}



                                </Select>
                            </FormControl>
                        </Grid>



                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
          </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
              </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}