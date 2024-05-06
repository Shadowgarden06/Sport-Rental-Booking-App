import React from 'react';
import style from './BodyContact.module.css'



function BodyContact(props) {
    return (
        <div className={style.container_bodyContact}>

            <div className={style.e}>
                <div className={style.card_form}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH49yI49aToNiMHop6p8hSnXMOByt3AuO6A_W_gzPY4XNaDM8WY8NeCAgaRYpQcXMArl4&usqp=CAU'></img>
                    <div id={style.demo1} className={style.card_content}>
                        <a><i class="fa-regular fa-envelope"></i></a>
                        <h2><span>Our Email</span></h2>
                        <p>noemail@nodomain.com
                            <br></br>
                            contact@domain.com</p>
                    </div>
                </div>

                <div className={style.card_form}>
                    <img src='https://img.freepik.com/free-vector/costumer-support-illustration_24908-61541.jpg'></img>

                    <div id={style.demo2} className={style.card_content}>
                        <a><i class="fa-solid fa-phone"></i></a>
                        <h2><span>Our Phone</span></h2>
                        <p>+0908343344
                            <br></br>
                            +0832216464</p>
                    </div>
                </div>


                <div className={style.card_form}>
                    <img src='https://i0.wp.com/media.sproutsocial.com/uploads/2018/04/Facebook-Ad-Sizes.png?w=1200&ssl=1'></img>

                    <div id={style.demo3} className={style.card_content}>
                        <a><i class="fa-solid fa-city"></i></a>
                        <h2><span>Our Address</span></h2>
                        <p>319A Nam Ki Khoi Nghia
                            <br></br>
                            Dristrict 3, HCM city,VN</p>
                    </div>
                </div>





            </div>

        </div>
    );
}

export default BodyContact;