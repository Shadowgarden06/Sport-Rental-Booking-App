import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import './SignUP.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SignUp(props) {
  const {setSaveInfo, saveInfo}=props
  const navigate = useNavigate()
  const {mail1 ,setMail1}=useState('')
  
  console.log("saveInfo",saveInfo);
  const {pass1 ,setPass1}=useState('')

  const FormSchema = yup.object().shape({
    mail1: yup
      .string()
      .required("Email is Required !")
      .email('Invalid Email'),
    pass1: yup
      .string()
      .required("Password is Required !")
      .min(8, 'Password must be 8 characters long')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter')
      .matches(/[^\w]/, 'Password requires a symbol'),
    confirmPass: yup
      .string()
      .required("Not yet Confirm Password !")
      .oneOf([yup.ref('pass1'), null], 'Must match "Password" field value'),
    check: yup
      .boolean().oneOf([true], 'You need to accept the terms and conditions'),
  });

  const FormComponent = () => {
    return (
      <Formik
        initialValues={{
          mail1: '',
          pass1: '',
          confirmPass: '',
          check: false
        }}
        validationSchema={FormSchema}
        onSubmit={(values) => {
          
          Swal.fire({
            title: "Successfully!",
            html: `
        <a href="/">Go to Home Page Now!</a>
      `,
            text: "Welcome to!",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Go to Home Page Now!",
            cancelButtonColor: "#d33",
            cancelButtonText: "Check again!",
          }).then ((result)=>{
            if(result.isConfirmed)
              {
                setSaveInfo({mail2: values.mail1, pass2: values.pass1})
                navigate("/")
           
              }
          });
         
          
        }}
      >
        {({ errors }) => (
          <Form>
            <div class="row justify-content-center back">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <div data-mdb-input-init class="form-outline flex-fill mb-0">
                    <Field type="text" name='mail1' class="form-control" />
                    <label class="form-label" htmlFor="form3Example3c">Username Email</label>
                    {errors.mail1 && <p className='validate'>{errors.mail1}</p>}
                  </div>
                </div>

                <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                  <div data-mdb-input-init class="form-outline flex-fill mb-0">
                    <Field type="password" name='pass1' class="form-control" />
                    <label class="form-label" htmlFor="form3Example4c">Password</label>
                    {errors.pass1 && <p className='validate'>{errors.pass1}</p>}
                  </div>
                </div>

                <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                  <div data-mdb-input-init class="form-outline flex-fill mb-0">
                    <Field type="password" name='confirmPass' class="form-control" />
                    <label class="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                    {errors.confirmPass && <p className='validate'>{errors.confirmPass}</p>}
                  </div>
                </div>

                <div class="form-check d-flex justify-content-center mb-5">
                  <Field class="form-check-input me-2" type="checkbox" name='check' />
                  <label class="form-check-label" htmlFor="form2Example3">
                    I agree all statements in <a href="#!">Terms of service</a>
                  </label>
                </div>
                {errors.check && <p className='validate'>{errors.check}</p>}
                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg">Register</button>
                </div>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image" />

              </div>
            </div>

          </Form>
        )}
      </Formik>
    );
  };
  return (
    <div>
      <FormComponent />
    </div>
  );
}

export default SignUp;