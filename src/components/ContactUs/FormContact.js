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
        <div className={holds.total_container_form}>
            <div className={holds.para}>
                <p class={holds.diagram}>
                    Hello ,
                    I want to express my sincere gratitude for taking the time and effort to provide feedback. It means a lot to me and will help me improve and grow in the future.
                    Your feedback not only helps me understand what I've done well but also gives me insights into areas where I may need to improve. I truly appreciate your honesty and constructive criticism.
                    If there's anything else you'd like to share or any further questions you have, please don't hesitate to reach out. I'm always willing to listen and learn from others' perspectives.
                    Once again, thank you so much for your support and feedback.
                    Best regards,
                    Ryan Sport Club
                </p>
            </div>




            <div className={holds.form_container}>
                {Object.keys(formErrors).length === 0 && isSubmit ? (<div className={holds.successForm}>Send in successfully</div>) :
                    (<pre >{(formValues, undefined)}</pre>)
                }

                <div className={holds.content_form}>
                    <h2>Ryan Sport Club</h2>
                    <h2>Ryan Sport Club</h2>
                </div>
                <form onSubmit={handleSubmit}>

                    <div className={holds.form_control}>
                        <label htmlFor="feedback" className={holds.form_lab}>Name</label>
                        <input type="text" className="form-control"  name='name'
                            value={formValues.name}
                            onChange={handleChange}

                        />
                        <i className={holds.form_animation}></i>


                    </div>
                    <p className='text-danger' id='text1'>{formErrors.name}</p>

                    <div className={holds.form_control}>
                        <label htmlFor="feedback" className={holds.form_lab}>Email address</label>
                        <input type="email" className="form-control"  name='email'
                            value={formValues.email}
                            onChange={handleChange}

                        />
                        <i className={holds.form_animation}></i>

                    </div>
                    <p className='text-danger' id='text1'>{formErrors.email}</p>


                    <div className={holds.form_control}>
                        <label htmlFor="exampleFormControlTextarea1" className={holds.form_lab}>Message</label>
                        <textarea className="form-control" rows="3" name='message'
                            value={formValues.message}
                            onChange={handleChange}
                        ></textarea>
                        <i className={holds.form_animation}></i>

                    </div>
                    <p className='text-danger' id='text1'>{formErrors.message} </p>
                    <div className={holds.form_control}>

                        <button className='btn btn-danger'>Submit</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default FormContact;