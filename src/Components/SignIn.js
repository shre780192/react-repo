import * as React from 'react';
import { useRef, useState, useEffect, useContext } from 'react';
import { Button, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AuthContext from "../context/AuthProvider";
import Typography from '@mui/material/Typography';
import Dashboard from './Dashboard';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AlertDialog from './AlertDialog';
const theme = createTheme();

export default function SignIn() {
    const { auth, setAuth } = useContext(AuthContext);
     const errRef = useRef();
     const userRef = useRef();
    const [errorMsg,setErrorMsg] = React.useState('');
    const [username,setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [success, setSuccess] = useState(false);
    const [open, setOpen] = useState(false);

    const handleCloseAfterSettingPwd = () => {
      localStorage.setItem("password", auth.password);
      setOpen(false);
    };
    
  
    const handleClose = () => {
      setOpen(false);
    };
    
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrorMsg('');
    }, [username, password])

    
    
    const handleSubmit = async (e) => {
        //setOpen(true);
        e.preventDefault();
        
        try {
            
            const response = fetch("http://localhost:3010/users")
                
                .then(res => res.json())
                .then(result => {
                    result.forEach(function (arrayItem) {
                        if (arrayItem.username === username && arrayItem.password === password) {
                            setAuth({ username, password });
                            setUsername('');
                            setPassword('');
                            setSuccess(true);   
                            
                        }
                    });
                }
                
                    
                    
                  
            ).
                catch(error => console.log(error));
            
                
            
        } catch (err) {
            if (!err?.response) {
                setErrorMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrorMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrorMsg('Unauthorized');
            } else {
                setErrorMsg('Login Failed');
            }
            errRef.current.focus();
        }
        
    }


  return (
    <>
          {success ? (
              <div><Dashboard /></div>
            ) : (
                <section>
                    <p ref={errRef} className={errorMsg ? "errorMsg" : "offscreen"} aria-live="assertive">{errorMsg}</p>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <TextField data-testid="test1"
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />
                        <br />
                        <label htmlFor="password">Password:</label>
                        <TextField
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        /><br />
                        <Button variant="contained" onClick={handleSubmit} >Sign In</Button>
                    </form>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description">
                        <DialogTitle id="alert-dialog-title">
                        {"Alert!"}
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Do you want to save your password?.
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>Remind me Later</Button>
                        <Button onClick={handleClose} >
                            Cancel
                        </Button>
                        </DialogActions>
                    </Dialog>
                  </section>
                  
            )}
        </>
  );
}