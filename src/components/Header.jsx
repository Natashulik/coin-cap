import React from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Header = () => {
    return <div className='header'>
        <Link to='/' className="logo_block"> 
           <img  className="logo_image" src={logo} alt="логотип" /> 
           <h2 className='header_title'> <span className="first_letter">C</span>oin<span className="first_letter">C</span>ap</h2>
     </Link>    
    </div>

}


export default Header;