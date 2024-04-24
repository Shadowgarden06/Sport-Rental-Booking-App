import React from 'react';
import background from './background.png'
import './Header.css';

function Footer(props) {
    return (
        <div>
            <div class="footer">
  <div class="row">
    <div class="col-sm-4 ">
      <h3 className='text-decoration-underline fw-bold'>Contact to Ryan</h3>
      <p>Adirondack Sports Complex
326 Sherman AvenueQueensbury, New York 12804-9041</p>
<p>Phone: <a href="#" class="text-decoration-underline text-dark">(518) 743-1086</a></p>
 <p>Fax: <a href="#" class="text-decoration-underline text-dark">(518) 743-1247</a></p> 
    </div>
    <div class="col-sm-4">
      <h3 className='text-decoration-underline fw-bold'>Sport for everyone</h3>
      <ul>
  <li><a href="#" class="text-decoration-underline text-dark">Basketball</a> </li>
  <li><a href="#" class="text-decoration-underline text-dark">Football</a> </li>
  <li><a href="#" class="text-decoration-underline text-dark">Baseball</a> </li>
  <li><a href="#" class="text-decoration-underline text-dark">Badminton</a> </li>
</ul>  
    </div>
    <div class="col-sm-4">
      <h3 className='text-decoration-underline fw-bold'>General Info</h3>        
      <ul>
      <li><a href="#" class="text-decoration-underline text-dark">About us</a> </li>
  <li><a href="#" class="text-decoration-underline text-dark">FAQs</a> </li>
  <li><a href="#" class="text-decoration-underline text-dark">Plan Your Event</a> </li>
  <li><a href="#" class="text-decoration-underline text-dark">Contact</a> </li>
</ul>  
    </div>
  </div>
  <img className='background2' src={background}></img>
  <p className='text-center'>@Copyright 2024 - Ryan sport club</p>
</div>
        </div>
    );
}

export default Footer;