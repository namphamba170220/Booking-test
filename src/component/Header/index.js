import AppleIcon from '@material-ui/icons/Apple';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';

export default function Header() {

    const [showModal,setShowModal] = React.useState(false)

    const ShowModalSignIn = () => {
        setShowModal(true);
        setOpen(true);
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AppleIcon />
          </IconButton>
          <Typography className='homepage' variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
          <p><Link to="/homepage">Home</Link></p>
          </Typography>
          <Typography className='homepage' variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
          <p><Link to="/todos">Todos</Link></p>
          </Typography>
          <Typography className='homepage' variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <p><Link to="/albums">Ablums</Link></p>
          </Typography>
          <Button color="inherit" onClick={ShowModalSignIn}>Login</Button>
          <Modal handleClickOpen={handleClickOpen} handleClose={handleClose} open={open}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}