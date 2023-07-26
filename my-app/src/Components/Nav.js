import React from 'react'
import navimg from './assets/navimg (1).png'
import './Nav.css'

function Nav() {
    return(

        <nav>
      <ul>
        <img src={navimg} width={200} />
        <li><a href="#" class="active">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
    );

};

export default Nav;