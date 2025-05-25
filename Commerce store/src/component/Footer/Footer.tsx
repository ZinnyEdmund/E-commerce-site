import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import '../Footer/Footer.css';


function Footer() {
    return (
        <footer>
            <div className="footer-head">
                <div className="footer-main">
                    <div className="footer">
                        <h2>Bandage</h2>
                    </div>
                    <div className="Social-econs">
                        <span><FaFacebook color="#23A6F2" size={20}/></span>
                        <span><IoLogoInstagram color="#23A6F2" size={20}/></span>
                        <span><FaTwitter color="#23A6F2" size={20}/></span>   
                    </div>
                </div>
                    <hr />
            </div>

                <div className="footer-content">
                    <div className="footer-main">
                        <div className="footer-column">
                            <h3>Company Info</h3>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Carrier</a></li>
                                <li><a href="#">We are hiring</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Legal</h3>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Carrier</a></li>
                                <li><a href="#">We are hiring</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Feature</h3>
                            <ul>
                                <li><a href="#">Business Marketing</a></li>
                                <li><a href="#">User Aanlytic</a></li>
                                <li><a href="#">Live Chat</a></li>
                                <li><a href="#">Unlimited Support</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Resources</h3>
                            <ul>
                                <li><a href="#">IOS & Andriod</a></li>
                                <li><a href="#">Watch a Demo</a></li>
                                <li><a href="#">Customers</a></li>
                                <li><a href="#">API</a></li>
                            </ul>
                        </div>
                        <div className="footer-column subscribe-Btn">
                            <h3>Get In Touch</h3>
                            <input type="email" placeholder="Your Email" />
                            <button className="footer-Btn">Subscribe</button>
                            <p className="last-p">Lore imp sum dolor Amit</p>
                        </div>
                        
                    </div>
                </div>

                <div className="copyright">
                    <h3 className="copyright-text">Made With Love By Finland All Right Reserved </h3>
                </div>
        </footer>
    )
}

export default Footer;