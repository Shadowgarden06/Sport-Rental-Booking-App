import React, { useState } from 'react';
import HeadingContact from '../components/ContactUs/HeadingContact';
import BodyContact from '../components/ContactUs/BodyContact';
import FormContact from '../components/ContactUs/FormContact';
import Header from '../components/HeaderAndFooter/Header';
import Footer from '../components/HeaderAndFooter/Footer';




function ContactUs(props) {
    // const [showForm,setShowForm] = useState(false)
    return (
        <div 
        style={{backgroundImage:`url("https://live.staticflickr.com/1962/45001551371_54fd57b714_h.jpg")`, backgroundSize:'cover'}}>
            <Header/>
          <HeadingContact/>
          <BodyContact/>
          {/* <button onClick={()=>setShowForm(!showForm)}>Send Message</button> */}
          <FormContact/>
        {/* {showForm &&  }  */}
            <Footer/>
            
        </div>
    );
}

export default ContactUs;