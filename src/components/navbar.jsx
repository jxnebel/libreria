import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom'


//Funcion que maneja la barra de navegacion
function Navbar(){
    return (
        <div className='navbar'>
            <div>
            <h1>Your Favorite Book App</h1>
            </div>
            <div>
            <Link to='/favorites'>
            <h3>Your Favorites</h3>
            </Link>
            </div>
        </div>
        
    )
}

export default Navbar;