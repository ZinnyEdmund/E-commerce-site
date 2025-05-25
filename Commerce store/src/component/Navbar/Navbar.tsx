// import './index.css';
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";import { useState } from "react"; // Add this import
import '../Navbar/Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Add this state

    return (
        <div>
            <div className="top-info-bar">
                <div className="contact-info">
                    <div className="contact-item">
                       <span className="icons"><FiPhone/></span>
                        <span>(225) 555-0118</span>
                    </div>
                    <div className="contact-item">
                        <span className="icons"><AiOutlineMail /></span>
                        <span>michelle.rivera@example.com</span>
                    </div>
                </div>
                <div className="promo-text">
                    Follow Us  and get a chance to win 80% off
                </div>
                <div className="social-media">
                    <span>Follow Us: </span>
                    <span className="icons"><IoLogoInstagram /></span>
                    <span className="icons"><IoLogoYoutube color="#fff"/></span>
                    <span className="icons"><FaFacebook color="#fff" /></span>
                    <span className="icons"><FaTwitter color="#fff" /></span>
                </div>
            </div>
            <header className="main-header">
                <div className="logo">Bandage</div>

                <nav className={`nav-container ${isMenuOpen ? 'nav-open' : ''}`}>
                    {/* Desktop Nav */}
                    <ul className="nav-menu">
                        <li><a href="#">Home</a></li>
                        <li className="dropdown">
                            <a href="#">Shop <span className="dp"><IoIosArrowDown/></span></a>
                        </li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Pages</a></li>
                    </ul>

                    {/* Mobile Nav */}
                    <ul className="mobile-nav-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                    <div className="user-actions mobile-actions">
                        <div className="login-register">
                            <BiUser />
                            <li><a href="#">Login / Register</a></li>
                        </div>
                        <div className="icon-container">
                            <BsSearch color="#23A6F0"/>
                        </div>
                        <div className="icon-container">
                            <BsCart color="#23A6F0"/>
                            <span className="num">1</span>
                        </div>
                        <div className="icon-container">
                            <FaRegHeart color="#23A6F0"/>
                            <span className="num">1</span>
                        </div>
                    </div>
                </nav>
                <div className="user-actions desktop-actions">
                    <div className="login-register">
                        <BiUser />
                        <li><a href="#">Login / Register</a></li>
                    </div>
                    <div className="icon-container">
                        <BsSearch color="#23A6F0"/>
                    </div>
                    <div className="icon-container">
                        <BsCart color="#23A6F0"/>
                        <span className="num">1</span>
                    </div>
                    <div className="icon-container">
                        <FaRegHeart color="#23A6F0"/>
                        <span className="num">1</span>
                    </div>
                </div>
                <button 
                    className="hamburger-menu" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <BiMenuAltRight size={24}/>
                </button>
            </header>
        </div>
    )
}

export default Navbar;