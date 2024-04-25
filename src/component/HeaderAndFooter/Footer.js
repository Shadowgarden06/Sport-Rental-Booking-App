import React from 'react';
import background from './background.png'
import './Header.css';

function Footer(props) {
    return (
        <div>
            <div class="footer">
  <div class="row">
    <div class="col-sm-4 ">
      <h3 className='fw-bold'>Contact to Ryan</h3>
      <p>Adirondack Sports Complex
326 Sherman AvenueQueensbury, New York 12804-9041</p>
<p>Phone: <a href="#" class="text-decoration-underline text-dark">(518) 743-1086</a></p>
 <p>Fax: <a href="#" class="text-decoration-underline text-dark">(518) 743-1247</a></p> 
    </div>
    <div class="col-sm-4">
      <h3 className='fw-bold'>Sport for everyone</h3>
      <dd>
  <dt><a href="/basketball" class="text-dark">Basketball</a> </dt>
  <dt><a href="/football" class="text-dark">Football</a> </dt>
  <dt><a href="/baseball" class="text-dark">Baseball</a> </dt>
  <dt><a href="/badminton" class="text-dark">Badminton</a> </dt>
</dd>  
    </div>
    <div class="col-sm-4">
      <h3 className='fw-bold'>General Info</h3>        
      <dd>
      <dt><a href="/about" class="text-dark">About us</a> </dt>
  <dt><a href="/feedback" class="text-dark">FAQs</a> </dt>
  <dt><a href="/event" class="text-dark">Plan Your Event</a> </dt>
</dd>  
    </div>
  </div>
  <img className='background2' src={background}></img>
  <p className='end'>@Copyright 2024 - Ryan sport club</p>
</div>
        </div>
    );
}

export default Footer;