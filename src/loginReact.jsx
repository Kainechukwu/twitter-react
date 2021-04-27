import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    twitter: {
        margin: theme.spacing(1),
        color: "rgba(29,161,242,1.00)",
        fontSize: "45px"
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        borderRadius: "40px",
        // backgroundColor: "rgba(29,161,242,1.00)",
        color: "white"
    }
}));

export default function Login() {
    const classes = useStyles();
    const [buttonHover, setButtonHover] = useState(false);
    const [login, setLogin] = useState({
        username: "",
        password: ""
    });

    function buttonOver() {
        setButtonHover(true);
    }

    function buttonOut() {
        setButtonHover(false);
    }

    function handleLoginChange(event) {


        const { name, value } = event.target;

        setLogin(prevValue => {
            if (name === "email") {
                return {
                    username: value,
                    password: prevValue.password
                };
            } else if (name === "password") {
                return {
                    username: prevValue.username,
                    password: value
                };

            };
        });

        // console.log(`${name} ${value}`)



    }

    let history = useHistory();

    function submitDetails(event) {
        // console.log(login.username);

        // const options = {
        //     headers: {'username': login.username}
        // }

        axios.post("http://localhost:3000/login", login).then(response => {
            if (response.status === 200) {
                // history.push("/userpageReact");
                console.log(response)
                localStorage.setItem("user_id", response.headers.user_id)
            }
        });



        // const token = Buffer.from(`${login.username}:${login.password}`, 'utf8').toString('base64')

        
        


        // axios({
        //     method: "POST",
        //     data: login,
        //     withCredentials: true,
        //     url: "http://localhost:3000/login",
        //     // headers: {
        //     //     'Authorization': `Basic ${token}`
        //     // }

        // }).then(response => {
        //     // console.log(response.config.dataf);
            // if (response.status === 200) {
            //     // history.push("/userpageReact");
            //     console.log(response)
            // }
        // });



        event.preventDefault();
    }




    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                <TwitterIcon className={classes.twitter}></TwitterIcon>
                <Typography component="h1" variant="h5">
                    Log in
        </Typography>
                <form onSubmit={submitDetails} className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={login.username}
                        onChange={handleLoginChange}

                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={login.password}
                        onChange={handleLoginChange}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        style={{ backgroundColor: buttonHover ? "turquoise" : "rgba(29,161,242,1.00)" }}
                        className={classes.submit}
                        onMouseOver={buttonOver}
                        onMouseOut={buttonOut}
                    >
                        Log In
          </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
              </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}