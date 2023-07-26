import React from 'react'
import navimg from './assets/navimg (1).png'
import './imp.css'
import { Link } from "react-router-dom";


function Nav() {
    return(

        <nav>
      <ul>
        <img src={navimg} width={200} />
        <li><Link to="/" class="active">Home</Link></li>
        <li><Link to="/Main">About</Link></li>
        <li><Link to="/Main">Menu</Link></li>
        <li><Link to="/BookingPage">Reservations</Link></li>
        <li><Link to="/Footer">Order Online</Link></li>
        <li><Link to="/">Login</Link></li>
      </ul>
    </nav>
    );

};

export default Nav;