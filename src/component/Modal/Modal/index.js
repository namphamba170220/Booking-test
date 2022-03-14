import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import * as React from 'react';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal(props) {
  const {handleClose, open} = props;
  const[isOpenSignUp, setIsOpenSignUp] = React.useState(false);

  const handelToggleModal = () => {
    setIsOpenSignUp(!isOpenSignUp);
  }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      > 
        {isOpenSignUp && <SignUp onToggle={handelToggleModal}/>}
        {!isOpenSignUp && <SignIn onToggle={handelToggleModal}/>}

      </Dialog>
    </div>
  );
}