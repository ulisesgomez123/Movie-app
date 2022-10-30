import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../img/pelicula.png';

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
            <img className='img' src={img} alt='icono'/>
            </div>
            <div><h2 className='h2'>Movie App</h2></div>
            <nav>
                <ul className="list">
                    <li className='list-item'>
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/favs">Favorites</NavLink>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}