import React from 'react';
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faAppleAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
               <Link to='/' style={{ textDecoration: 'none' }}><h1>HortiFruti <FontAwesomeIcon icon={faAppleAlt} className='icone' /></h1></Link> 
               <Link to='/carrinho'> <FontAwesomeIcon icon={faShoppingCart} className='icone'/></Link>
        </header>
    )
}

export default Header;