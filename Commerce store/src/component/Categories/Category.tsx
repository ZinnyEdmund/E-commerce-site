import FirstCat from '../images/FirstCat.png'
import SecondCat from '../images/SecondCat.png';
import Thirdcat from '../images/Thirdcat.png';
import { BiAlarm } from "react-icons/bi";
import gallery from '../images/gallery.png';
import { IoIosArrowForward } from "react-icons/io";
import '../Categories/Category.css';

function Categories() {
    return (
        <section>
            <div>
                <div className="categories">
                    <h5 className="categories-title">Pratice Advice</h5>
                    <h2 className="categories-sub-title">Featured Post</h2>
                </div>
            </div>

                <div className="product-container">
                        {/* First Card */}
                        <div className="product-cards">
                            <div className="categories-image">
                                <img src={FirstCat} alt="Category picture" />
                                <div className="categories-image-text">
                                    <p className="text">NEW</p>
                                </div>
                        </div>
                        
                        <div className="categories-Btns">
                            <button className="Btn">Google</button>
                            <button className="Btn1">Trending</button>
                            <button className="Btn1">New</button>
                        </div>

                    <div className="Description">
                        <h3 className="Description-header">Loudest à la Madison #1 <br />(L'integral)</h3>
                        <p className="Description-text">
                            We focus on ergonomics and meeting <br />
                            you where you work. It's only a <br />
                            keystroke away.
                        </p>
                    </div>

                    <div className="sct1">
                        <div className="Alarm">
                            <span><BiAlarm color="#23A6F0" /></span>
                            <p>22 April 2021</p>
                        </div>
                        <div className="Gallery">
                            <span><img src={gallery} alt="gallery logo" /></span>
                            <p>10 comments</p>
                        </div>
                    </div>
                
                    <div className="Learn-More">
                        <button>Learn More</button>
                        <span><IoIosArrowForward /></span>
                    </div>
                </div>

                {/* Second Card */}
                <div className="product-cards">
                    <div className="categories-image">
                        <img src={SecondCat} alt="Category picture" />
                        <div className="categories-image-text">
                            <p className="text">NEW</p>
                        </div>
                    </div>
                            
                    <div className="categories-Btns">
                        <button className="Btn">Google</button>
                        <button className="Btn1">Trending</button>
                        <button className="Btn1">New</button>
                    </div>

                    <div className="Description">
                        <h3 className="Description-header">Loudest à la Madison #1 <br />(L'integral)</h3>
                        <p className="Description-text">
                            We focus on ergonomics and meeting <br />
                            you where you work. It's only a <br />
                            keystroke away.
                        </p>
                    </div>

                    <div className="sct1">
                        <div className="Alarm">
                            <span><BiAlarm color="#23A6F0" /></span>
                            <p>22 April 2021</p>
                        </div>
                        <div className="Gallery">
                            <span><img src={gallery} alt="gallery logo" /></span>
                            <p>10 comments</p>
                        </div>
                    </div>
                    
                    <div className="Learn-More">
                        <button>Learn More</button>
                        <span><IoIosArrowForward /></span>
                    </div>
                </div>

                {/* Third Card */}
                <div className="product-cards">
                    <div className="categories-image">
                        <img src={Thirdcat} alt="Category picture" />
                        <div className="categories-image-text">
                            <p className="text">NEW</p>
                        </div>
                    </div>
                            
                    <div className="categories-Btns">
                        <button className="Btn">Google</button>
                        <button className="Btn1">Trending</button>
                        <button className="Btn1">New</button>
                    </div>

                    <div className="Description">
                        <h3 className="Description-header">Loudest à la Madison #1 <br />(L'integral)</h3>
                        <p className="Description-text">
                            We focus on ergonomics and meeting <br />
                            you where you work. It's only a <br />
                            keystroke away.
                        </p>
                    </div>

                    <div className="sct1">
                        <div className="Alarm">
                            <span><BiAlarm color="#23A6F0" /></span>
                            <p>22 April 2021</p>
                        </div>
                        <div className="Gallery">
                            <span><img src={gallery} alt="gallery logo" /></span>
                            <p>10 comments</p>
                        </div>
                    </div>
                    
                    <div className="Learn-More">
                        <button>Learn More</button>
                        <span><IoIosArrowForward /></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories;