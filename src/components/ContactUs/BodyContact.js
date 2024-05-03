import React from 'react';
import style from './BodyContact.module.css'



function BodyContact(props) {
    return (
        <div className={style.container_bodyContact}>

<div className={style.e }>
                <div id={style.demo1}>
                    <a><i class="fa-regular fa-envelope"></i></a>
                    <h2><span>Our Email</span></h2>
                    <p>noemail@nodomain.com
                        <br></br>
                        contact@domain.com</p>
                </div>

                <div id={style.demo2}>
                    <a><i class="fa-solid fa-phone"></i></a>
                    <h2><span>Our Phone</span></h2>
                    <p>+0908343344
                        <br></br>
                        +0832216464</p>
                </div>

                <div id={style.demo3}>
                    <a><i class="fa-solid fa-city"></i></a>
                    <h2><span>Our Address</span></h2>
                    <p>319A Nam Ki Khoi Nghia
                        <br></br>
                        Dristrict 3, HCM city,VN</p>
                </div>


            </div>
            
        </div>
    );
}

export default BodyContact;