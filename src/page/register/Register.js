import React from 'react';
import './Register.css'
import Header from '../../components/HeaderAndFooter/Header';
import Footer from '../../components/HeaderAndFooter/Footer';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Register(props) {
  const navigate = useNavigate()
  const fireAlert = (e) => {
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
            navigate("/")
            Swal.fire('Register Success', '', 'success');


        } else
            Swal.fire('Cancelled', '', 'error')

    })
}
    return (
        <div>
            <Header/>
            <h1 className='fw-bolder text-center text-uppercase mt-3 mg-3'>Membership Application</h1>
            <p className='text-center fs-5'>To apply for membership please complete all questions.</p>
            <form class="row g-3">
            <label htmlFor ="inputEmail4" class="form-label">Name:</label>
  <div class="col-md-6">
    <input type="text" class="form-control" id="inputFirst" placeholder='First Name'/>
  </div>
  <div class="col-md-6">
    <input type="text" class="form-control" id="inputLast" placeholder='Last Name'/>
  </div>
  <label htmlFor ="inputEmail4" class="form-label">Address:</label>
  <div class="col-12">
    <input type="text" className="form-control" id="inputAddress" placeholder="Street address"/>
  </div>
  <div class="col-12 mt-3">
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
      <input type="text" class="form-control" id="inputEmail"/>
    </div>
  </div>
  <div class="row-md-5">
    <label for="inputNumber" class="col-sm-2 col-form-label">Number:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputNumber"/>
    </div>
  </div>
  <div class="row-md-5">
    <label for="inputDate" class="col-sm-2 col-form-label">Signing Date::</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputNumber" value={new Date().toDateString()} disabled/>
    </div>
  </div>
</form>

    <button type="submit" className="submit" onClick={(e)=>fireAlert(e)}>SUBMIT FOR MEMBERSHIP</button>
 
            <Footer/>
        </div>
    );
}

export default Register;