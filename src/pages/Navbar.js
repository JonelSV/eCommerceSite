import React from "react"; 
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav id="nav-bar">
    <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/About">About</Link>
            </li>
            <li>
            <Link to="/Contact">Contact</Link>
            </li>
            <li>
            <Link to="/Tours">Tour Packages</Link>
            </li>

                                                     
    </ul>
</nav>
    
  )
}

export default Navbar