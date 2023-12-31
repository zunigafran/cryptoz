import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'


const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)
    
  return (
    <div className="header">
        <div className="container">
            <h1>Crypto<span className='primary'>Z</span></h1>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>Featured</a>
                </li>
                <li>
                    <a href='/'>Earn</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
            </ul>
            <div className="btn-group">
                <button className="btn">Connect Wallet</button>
            </div>
            <div className="burger" onClick={handleClick}>
                {click ? (<FaTimes size={16} style={{color: '#333'}}/>) : (<FaBars size={16} style={{color: '#333'}}/>)}
            </div>
        </div>
    </div>
  )
}

export default Navbar
