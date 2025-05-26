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
import styles from '../Navbar/Navbar.module.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Add this state

    return (
        <div>
            <div className={styles["top-info-bar"]}>
                <div className={styles["contact-info"]}>
                    <div className={styles["contact-item"]}>
                       <span className={styles["icons"]}><FiPhone/></span>
                        <span>(225) 555-0118</span>
                    </div>
                    <div className={styles["contact-item"]}>
                        <span className={styles["icons"]}><AiOutlineMail /></span>
                        <span>michelle.rivera@example.com</span>
                    </div>
                </div>
                <div className={styles["promo-text"]}>
                    Follow Us  and get a chance to win 80% off
                </div>
                <div className={styles["social-media"]}>
                    <span>Follow Us: </span>
                    <span className={styles["icons"]}><IoLogoInstagram /></span>
                    <span className={styles["icons"]}><IoLogoYoutube color="#fff"/></span>
                    <span className={styles["icons"]}><FaFacebook color="#fff" /></span>
                    <span className={styles["icons"]}><FaTwitter color="#fff" /></span>
                </div>
            </div>
            <header className={styles["main-header"]}>
                <div className={styles["logo"]}>Bandage</div>

                <nav className={`${styles["nav-container"]} ${isMenuOpen ? styles["nav-open"] : ""}`}>
                    {/* Desktop Nav */}
                    <ul className={styles["nav-menu"]}>
                        <li><a href="#">Home</a></li>
                        <li className={styles["dropdown"]}>
                            <a href="#">Shop <span className={styles["dp"]}><IoIosArrowDown/></span></a>
                        </li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Pages</a></li>
                    </ul>

                    {/* Mobile Nav */}
                    <ul className={styles["mobile-nav-menu"]}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                
                <div className={`${styles["user-actions"]} ${"desktop-actions"}`}>
                    <div className={styles["login-register"]}>
                        <BiUser />
                        <li><a href="#">Login / Register</a></li>
                    </div>
                    <div className={styles["icon-container"]}>
                        <BsSearch color="#23A6F0"/>
                    </div>
                    <div className={styles["icon-container"]}>
                        <BsCart color="#23A6F0"/>
                        <span className={styles["num"]}>1</span>
                    </div>
                    <div className={styles["icon-container"]}>
                        <FaRegHeart color="#23A6F0"/>
                        <span className={styles["num"]}>1</span>
                    </div>
                </div>

                <div className={styles["hamburger-menu" ]}>
                    <span className={styles["ham-icons"]}><BsSearch color="#252B42" size={26}/></span>
                    <span className={styles["ham-icons"]}><BsCart color="#252B42" size={26}/></span>
                    <button 
                        className={styles["hamburger"]} 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <BiMenuAltRight size={32}/>
                    </button>
                </div>

            </header>
        </div>
    )
}

export default Navbar;