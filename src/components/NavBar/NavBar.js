import React from 'react';
import { NavLink } from 'react-router-dom';


import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
            
            </div>
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