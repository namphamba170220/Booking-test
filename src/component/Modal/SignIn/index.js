import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import fire from '../../../firebase/firebase';
import './index.scss';

const theme = createTheme();

export default function SignIn(props) {
  const {onToggle} = props;


  const[modalSignIn, setModalSignIn] = React.useState(false)
  const[user, setUser] = React.useState('');
  const[email,setEmail] = React.useState('');
  const[password,setPassword] = React.useState('');
  const[emailError,setEmailError] = React.useState('');
  const[passwordError,setPasswordError] = React.useState('');
  const[hasAccount, setHasAccount] = React.useState(false);

  const clearInput = () => {
    setEmail('');
    setPassword('');
  }
  const clearError = () => {
    setEmailError('');
    setPasswordError('');
  }

  

  const ShowModalSigIn = () => {
    setModalSignIn(true);
  }

  const handelSignIn = (email,password) => {

    clearError();
    fire
    .auth()
    .singInWithEmailPassword(email, password)
    .catch((err) => {
      switch (err.code) {
        case "auth/invalid-email":
          break;
        case "auth/user-disable":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
        default: 
      }
    });
  };

  const handelSignUp = () => {
    clearInput();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
        default:
      }
    })
  };


  const handelLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        clearInput();
        setUser(user);
      } else {
        setUser('');
      }
    })
  }

  React.useEffect(() => {
    // authListener();
  })

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    handelSignIn(data.get('email'),data.get('password'));
  };

  

  return (
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmitForm} Validate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <p className='signup__account'>Forgot password?</p>
              </Grid>
              <Grid item>
                <p className='signup__account' onClick={onToggle}>Don't have an account? Sign Up</p>
              </Grid>
            </Grid>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}