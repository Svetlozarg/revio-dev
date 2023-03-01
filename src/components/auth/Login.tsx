import { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Theme,
} from '@mui/material';
import { createStyles } from '@mui/styles';
import makeStyles from '@mui/styles/makeStyles';
import { signIn } from 'next-auth/react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`,
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1,
    },
    header: {
      textAlign: 'center',
      background: '#212121',
      color: '#fff',
    },
    card: {
      marginTop: theme.spacing(10),
    },
  })
);

interface User {
  email: string;
  password: string;
  isError?: boolean;
  helperText?: string;
}

const Login = () => {
  const classes = useStyles();
  const [user, setUser] = useState<User>({ email: '', password: '' });

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setUser({
      ...user,
      isError: false,
      helperText: '',
      email: event.target.value,
    });
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setUser({
      ...user,
      isError: false,
      helperText: '',
      password: event.target.value,
    });
  };

  const handleLogin = async () => {
    if (user.email === '' || user.password === '')
      return setUser({
        ...user,
        isError: true,
        helperText: 'Email and password are required!',
      });

    await signIn('credentials', {
      email: user.email,
      password: user.password,
      redirect: true,
      callbackUrl: '/',
    });
  };

  return (
    <form className={classes.container} noValidate autoComplete='off'>
      <Card className={classes.card}>
        <CardHeader className={classes.header} title='Login App' />
        <CardContent>
          <div>
            <TextField
              error={user.isError}
              fullWidth
              id='email'
              type='email'
              label='Email'
              placeholder='Email'
              margin='normal'
              onChange={handleEmailChange}
            />
            <TextField
              error={user.isError}
              fullWidth
              id='password'
              type='password'
              label='Password'
              placeholder='Password'
              margin='normal'
              helperText={user.helperText}
              onChange={handlePasswordChange}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant='contained'
            size='large'
            color='secondary'
            className={classes.loginBtn}
            onClick={handleLogin}
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default Login;
