import React, { useState } from 'react';
import { Alert, Box, Button, Modal, Snackbar } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Login(props) {
    const [openSna2, setOpenSna2] = useState(false);
    const {saveInfo}=props
    console.log("save",saveInfo);
    const [openSna, setOpenSna] = useState(false);
    const location = useLocation();

    const navigate = useNavigate();
   
    const [info,setInfo] = useState({ mail:"",pass:""})
    const [info1,setInfo1] = useState([])
    let {open,setOpen,setShowAvatar,showAvatar} = props
    function handleInput(e)
    {
     let{name,value}=e.target;
   setInfo({...info,[name]:value});
    } 
    const openModal=(e)=>{
        e.preventDefault();
        setOpen(true)
    }
    const handleCloseSna = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSna(false);
      };
      const handleCloseSna2 = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSna2(false);
      };
  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = (e,mail, pass) => {
    let avatar = {showAvatar: 1}
    e.preventDefault();
    let dataSubmit={...info}
    setInfo1(pre1=>[...pre1,dataSubmit]);
    console.log(dataSubmit?.mail);
    if(dataSubmit?.mail=="" || dataSubmit?.pass ==="")
        {
        
            setOpenSna(true);

        }else if (dataSubmit?.mail !==saveInfo.mail2 || dataSubmit?.pass !==saveInfo.pass2){
        
            setOpenSna2(true);
        }
        else if (dataSubmit?.mail === saveInfo.mail2 && dataSubmit?.pass ===saveInfo.pass2){
          
          setOpen(false);
          setShowAvatar(1);
          navigate('/')
          
          console.log(showAvatar);
          
        }
  };

const enter = () => {
    
}
  
    return (
        <div>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,}}>
          <form>
  <div class="mb-3">
    <h1 className='text-center'>Login</h1>
    <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
    <input type="text" class="form-control"  aria-describedby="emailHelp" name='mail' onChange={handleInput}/>
    
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control"  name='pass' onChange={handleInput}/>
  </div>

  <button type="submit" class="btn btn-primary" onClick={(e)=>onSubmit(e)}>Submit</button>
  <a onClick={()=>navigate("/signup")}> Register</a>
 
</form>
          <Button sx={{left:'45%',width:100}} className='bg-danger text-white' onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
      <Snackbar open={openSna} autoHideDuration={6000} onClose={handleCloseSna}>
        <Alert
          onClose={handleCloseSna}
          severity="error"
          variant="filled"
          sx={{ width: '100%', bottom: 10, right:50}}
        >
          Please input Mail or Password
        </Alert>
        </Snackbar>
        <Snackbar open={openSna2} autoHideDuration={6000} onClose={handleCloseSna2}>
        <Alert
          onClose={handleCloseSna2}
          id='2'
          severity="error"
          variant="filled"
          sx={{ width: '100%', bottom: 10, right:50}}
        >
          Mail or Password does not exist
        </Alert>
       
      </Snackbar>
        </div>
    );
}

export default Login;