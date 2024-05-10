import React, { useState } from 'react';
import './Register.css'
import Header from '../../components/HeaderAndFooter/Header';
import Footer from '../../components/HeaderAndFooter/Footer';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Alert, Snackbar } from '@mui/material';

function Register(props) {
  const navigate = useNavigate()
  const mail_format= "c";
  const [open, setOpen] = useState(false);
  let {Infor,setInfor}= props
  const [errors, setErrors] = useState({fnameError:"",lnameError:"",addressError:"",mailError:"",numberError:""});
  const [product,setProduct] = useState({ fname:"",lname:"",address:"",mail: "",number:"",date: new Date().toDateString()});
  function handleInput(e)
  {
   let{name,value}=e.target;
   if (name == "number") {
    value = +value;
}
handleValidate(name, value)
 setProduct({...product,[name]:value});
  } 
 
  function handleValidate(name, value) {
    if (name == "fname") {
      if (value == "") {
          errors.fnameError = "First Name is required";
      }
      }else {
          delete errors.fnameError;
      }  
  
    if (name == "lname") {
        if (value == "") {
            errors.lnameError = "Last Name is required";
        }else {
            delete errors.lnameError;
        }  
    }
    if (name == "address") {
        if (value == "") {
            errors.addressError = "Address is required";
        }else {
            delete errors.addressError;
        }  
    }
    if (name == "mail") {
      if (value == "") {
          errors.mailError = "Mail is required";
      }else if(!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
        {
          errors.mailError = "Mail Invalid !";
        }
      else {
          delete errors.mailError;
      }  
  }
  if (name == "number") {
    if (value == "") {
        errors.numberError = "Number is required";
    }else {
        delete errors.numberError;
    }  
}
  }
  function onSubmit(e ,name,value)
 {
  e.preventDefault();
  if(Object.keys(errors).length == 0)
    {
      Swal.fire({
        title: 'Please check again your infomation.',
        width: 600,
        padding: "3em",
        color: "#565ecc",
        backdrop: `
          rgba(0,0,123,0.4)
          url("./gil-cat.gif")
          left top
          no-repeat
        `,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
        icon: 'info'
    }
    ).then((result) => {
        if (result.isConfirmed) {
          let dataSubmit={...product}
          setInfor(pre=>[...pre,dataSubmit]);
          console.log(dataSubmit);
            navigate("/history")
            Swal.fire('Register Success', '', 'success');


        } else
            Swal.fire('Cancelled', '', 'error')

    })
    }
   else{
    setOpen(true);
   }
    }

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    return (
        <div>
            <Header/>
            <h1 className='fw-bolder text-center text-uppercase mt-3 mg-3'>Membership Application</h1>
            <p className='text-center fs-5'>To apply for membership please complete all questions.</p>
            <form class="row g-3">
            <label htmlFor ="inputEmail4" class="form-label address">Name:</label>
  <div class="col-md-5 address">
    <input type="text" class="form-control" id="inputFirst" placeholder='First Name *' required name='fname' onChange={handleInput}></input>
    <p className='text-danger'>{errors?.fnameError}</p>
  </div>
  <div class="col-md-5 address">
    <input type="text" class="form-control" id="inputLast" placeholder='Last Name *' name='lname'  onChange={handleInput}/>
    <p className='text-danger'>{errors?.lnameError}</p>
  </div>
  <label htmlFor ="inputEmail4" class="form-label address">Address:</label>
  <div class="col-8 address">
    <input type="text" className="form-control" id="inputAddress" placeholder="Street address *" name='address'  onChange={handleInput}/>
    <p className='text-danger'>{errors?.addressError}</p>
  </div>
  <div class="col-8 address">
    <input type="text" class="form-control" id="inputAddress2" placeholder="Street Address Line 2"/>
  </div>
  <div class="col-md-6">
    <label htmlFor ="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-6">
    <label for="inputZip" class="form-label">State/Provine</label>
    <input type="text" class="form-control" id="inputState/Provine"/>
  </div>
  <div class="col-md-6">
    <label htmlFor ="inputPostal/Zipcode" class="form-label">Postal / Zipcode</label>
    <input type="text" class="form-control" id="inputPostal/Zipcode"/>
  </div>
  <div class="col-md-6">
    <label for="inputCountry" class="form-label">Country</label>
    <input type="text" class="form-control" id="inputCountry"/>
  </div>
  <div class="row-md-5">
    <label for="inputEmail" class="col-sm-2 col-form-label">Email:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail" name='mail' placeholder='Mail *' onChange={handleInput}/>
      <p className='text-danger'>{errors?.mailError}</p>
    </div>
  </div>
  <div class="row-md-5">
    <label for="inputNumber" class="col-sm-2 col-form-label">Number:</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="inputNumber" name='number' placeholder='Number *' onChange={handleInput}/>
      <p className='text-danger'>{errors?.numberError}</p>
    </div>
  </div>
  <div class="row-md-5">
    <label for="inputDate" class="col-sm-2 col-form-label">Signing Date::</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputNumber" value={new Date().toDateString()} disabled name='date'/>
    </div>
  </div>
  <button type="submit" className="submit" onClick={(e)=> onSubmit(e)}>SUBMIT FOR MEMBERSHIP</button>
  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: '32%', position: "absolute", bottom: 10, right:50}}
        >
          Make sure Name , Address , Mail and Number not null
        </Alert>
      </Snackbar>
</form>


 
            <Footer/>
        </div>
    );
}

export default Register;