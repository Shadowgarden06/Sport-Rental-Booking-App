// import React from 'react';
import React, { useEffect, useState } from 'react';
import holds from './FormContact.module.css'
function FormContact(props) {
    const initialValues = { name: "", email: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)



    function handleChange(e) {
        console.log(e.target);
        let { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })



    }
    function handleSubmit(e) {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setFormValues(initialValues)
        setIsSubmit(true);

    }


    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);

        }
    }, [formErrors])
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexName = /[0-9]/
        // /[0-9]/
        // const regexName= /^[a-zA-Z]*$/;
        ///^[a-zA-Z]*$/
        if (!values.name) {
            errors.name = "Name is required!"
        } else if (regexName.test(values.name)) {
            errors.name = "name must be a text!"
        }
        if (!values.email) {
            errors.email = "Email is required!"
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!"

        }

        if (!values.message) {
            errors.message = "Message is required!"
        } else if ((values.message < 0)) {
            errors.message = "Message must be than 1 character!"

        }
        return errors;





    }
    return (
        <div className={holds.form_container}>
            {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='text-info'>Send in successfully</div>) :
                (<pre>{JSON.stringify(formValues, undefined, 2)}</pre>)
            }


            <form onSubmit={handleSubmit}>
                <div className={holds.form_control}>
                    <label htmlFor="feedback">Name</label>
                    <input type="text" className="form-control" placeholder="full name" name='name'
                        value={formValues.name}
                        onChange={handleChange}

                    />
                </div>
                <p className='text-danger'>{formErrors.name}</p>

                <div className={holds.form_control}>
                    <label htmlFor="feedback">Email address</label>
                    <input type="email" className="form-control" placeholder="name@example.com" name='email'
                        value={formValues.email}
                        onChange={handleChange}
                    />
                </div>
                <p className='text-danger'>{formErrors.email}</p>


                <div className={holds.form_control}>
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" rows="3" name='message'
                        value={formValues.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <p className='text-danger'>{formErrors.message}</p>
                <div className={holds.form_control}>

                    <button className='btn btn-danger'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default FormContact;