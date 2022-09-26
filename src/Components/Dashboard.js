import React from "react";
import { useState, useContext, useEffect } from 'react';
import AuthContext from "../context/AuthProvider";
import { Button, Typography } from "@mui/material";
import AlertDialog from "./AlertDialog";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Dashboard = () => {
  const [curr] = useState(new Date().toString());
  const { auth,setAuth } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

    const handleCloseAfterSettingPwd = () => {
      localStorage.setItem("password", auth.password);
      setOpen(false);
    };
    
  
    const handleClose = () => {
      setOpen(false);
  };
  

  useEffect(() => {
    setOpen(true);
  },[])


  return (
    <div className="Dashboard" >
      <Typography variant="subtitle1" component="div">
      <p>Welcome { auth.username} to your dashboard</p>
    </Typography>
      
      <br />
      <Typography variant="subtitle1" component="div">
      <h4>The current time is {curr}. Have a good day.</h4>
    </Typography>
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
                        <Button onClick={handleClose} autoFocus>
                            Cancel
                        </Button>
                        </DialogActions>
                    </Dialog>
    </div>
  );
};
export default Dashboard;