import { BiSolidBookReader } from "react-icons/bi";
import { SlBookOpen } from "react-icons/sl";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import '../NewsLetter/NewsLetter.css';

function NewsLetter() {
    return (
        <div className="Wrap">
            <div className="newsletter">
                <p className="newsletter-title">Featured Products</p>
                <h4 className="newsletter-subtitle">THE BEST SERVICES</h4>
                <p className="newsletter-text">Problems trying to resolve the conflict between </p>
            </div>

            <div className="Container-wrapper">
                <div className="section1">
                    <div className="section1-item">
                        <span><BiSolidBookReader color=" #23A6F2" size={60}/></span>
                        <h4>Easy Wins</h4>
                        <p>Get your best looking smile <br />now!</p>
                    </div>

                    <div className="section1-item">
                        <span><SlBookOpen color=" #23A6F2" size={60}/></span>
                        <h4>Concrete</h4>
                        <p>Defalcate is most focused in <br />helping you
                         discover your most <br />beautiful smile</p>
                    </div>
               
                    <div className="section1-item">
                        <span><HiMiniArrowTrendingUp color=" #23A6F2" size={60}/></span>
                        <h4>Hack Growth</h4>
                        <p>Overcame any hurdle or any <br />other problem.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;