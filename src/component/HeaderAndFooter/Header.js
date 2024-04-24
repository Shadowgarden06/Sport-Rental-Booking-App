import React from 'react';
import './Header.css';
import background from './background.png'
import HeaderBack from './HeaderBack';

function Header(props) {
    return (
      <header>
        <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <div class="container-fluid">
      
          <form class="d-flex">
            <div className="nav-item">
            <img className='background1'src={background} alt=''></img>
            <h1 className="fw-bold">Ryan sport club</h1>
          <a class="nav-link active" href="/">Indoor Sport</a>
          <a class="nav-link active" href="/create">Outdoor Sport</a>
          <a class="nav-link active" href="/edit">Facility your event</a>
          <a class="nav-link active" href="/list">About us</a>
          <div className='nav-login'>
             <a class="nav-link active" href="/list">Login</a>
          </div>
         
            </div>
         
    </form>
        </div>
      </nav>
      <HeaderBack></HeaderBack>
      </header>
    );
}

export default Header;