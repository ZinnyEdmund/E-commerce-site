import FirstCat from '../images/FirstCat.png'
import SecondCat from '../images/SecondCat.png';
import Thirdcat from '../images/Thirdcat.png';
import { BiAlarm } from "react-icons/bi";
import gallery from '../images/gallery.png';
import { IoIosArrowForward } from "react-icons/io";
import styles from '../Categories/Category.module.css';

function Categories() {
    return (
        <section>
            <div>
                <div className={styles["categories"]}>
                    <h5 className={styles["categories-title"]}>Pratice Advice</h5>
                    <h2 className={styles["categories-sub-title"]}>Featured Post</h2>
                </div>
            </div>

                <div className={styles["product-container"]}>
                        {/* First Card */}
                        <div className={styles["product-cards"]}>
                            <div className={styles["categories-image"]}>
                                <img src={FirstCat} alt="Category picture" />
                                <div className={styles["categories-image-text"]}>
                                    <p className={styles["text"]}>NEW</p>
                                </div>
                        </div>
                        
                        <div className={styles["categories-Btns"]}>
                            <button className={styles["Btn"]}>Google</button>
                            <button className={styles["Btn1"]}>Trending</button>
                            <button className={styles["Btn1"]}>New</button>
                        </div>

                    <div className={styles["Description"]}>
                        <h3 className={styles["Description-header"]}>Loudest à la Madison #1 <br />(L'integral)</h3>
                        <p className={styles["Description-text"]}>
                            We focus on ergonomics and meeting <br />
                            you where you work. It's only a <br />
                            keystroke away.
                        </p>
                    </div>

                    <div className={styles["sct1"]}>
                        <div className={styles["Alarm"]}>
                            <span><BiAlarm color="#23A6F0" /></span>
                            <p>22 April 2021</p>
                        </div>
                        <div className={styles["Gallery"]}>
                            <span><img src={gallery} alt="gallery logo" /></span>
                            <p>10 comments</p>
                        </div>
                    </div>
                
                    <div className={styles["Learn-More"]}>
                        <button>Learn More</button>
                        <span><IoIosArrowForward /></span>
                    </div>
                </div>

                {/* Second Card */}
                <div className={styles["product-cards"]}>
                    <div className={styles["categories-image"]}>
                        <img src={SecondCat} alt="Category picture" />
                        <div className={styles["categories-image-text"]}>
                            <p className={styles["text"]}>NEW</p>
                        </div>
                    </div>
                            
                    <div className={styles["categories-Btns"]}>
                        <button className={styles["Btn"]}>Google</button>
                        <button className={styles["Btn1"]}>Trending</button>
                        <button className={styles["Btn1"]}>New</button>
                    </div>

                    <div className={styles["Description"]}>
                        <h3 className={styles["Description-header"]}>Loudest à la Madison #1 <br />(L'integral)</h3>
                        <p className={styles["Description-text"]}>
                            We focus on ergonomics and meeting <br />
                            you where you work. It's only a <br />
                            keystroke away.
                        </p>
                    </div>

                    <div className={styles["sct1"]}>
                        <div className={styles["Alarm"]}>
                            <span><BiAlarm color="#23A6F0" /></span>
                            <p>22 April 2021</p>
                        </div>
                        <div className={styles["Gallery"]}>
                            <span><img src={gallery} alt="gallery logo" /></span>
                            <p>10 comments</p>
                        </div>
                    </div>
                    
                    <div className={styles["Learn-More"]}>
                        <button>Learn More</button>
                        <span><IoIosArrowForward /></span>
                    </div>
                </div>

                {/* Third Card */}
                <div className={styles["product-cards"]}>
                    <div className={styles["categories-image"]}>
                        <img src={Thirdcat} alt="Category picture" />
                        <div className={styles["categories-image-text"]}>
                            <p className={styles["text"]}>NEW</p>
                        </div>
                    </div>
                            
                    <div className={styles["categories-Btns"]}>
                        <button className={styles["Btn"]}>Google</button>
                        <button className={styles["Btn1"]}>Trending</button>
                        <button className={styles["Btn1"]}>New</button>
                    </div>

                    <div className={styles["Description"]}>
                        <h3 className={styles["Description-header"]}>Loudest à la Madison #1 <br />(L'integral)</h3>
                        <p className={styles["Description-text"]}>
                            We focus on ergonomics and meeting <br />
                            you where you work. It's only a <br />
                            keystroke away.
                        </p>
                    </div>

                    <div className={styles["sct1"]}>
                        <div className={styles["Alarm"]}>
                            <span><BiAlarm color="#23A6F0" /></span>
                            <p>22 April 2021</p>
                        </div>
                        <div className={styles["Gallery"]}>
                            <span><img src={gallery} alt="gallery logo" /></span>
                            <p>10 comments</p>
                        </div>
                    </div>
                    
                    <div className={styles["Learn-More"]}>
                        <button>Learn More</button>
                        <span><IoIosArrowForward /></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories;