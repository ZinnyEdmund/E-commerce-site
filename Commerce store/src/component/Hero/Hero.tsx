/* JSX Component */
import Bg1 from '../images/Bg1.png';
import Bg2 from '../images/Bg2.png';
import Bg3 from '../images/Bg3.png';
import Bg4 from '../images/Bg4.png';
import styles from'../Hero/Hero.module.css';

function ProductGrid() {
  return (
    <section className={styles["product-grid-section"]}>
        <div className={styles["product-grid-container"]}>
            <div className={styles["product-grid"]}>
                {/* Large product card - Left column */}
                <div className={`${styles["product-card"]} ${styles["product-card-large"]}`}>
                    <img 
                        src={Bg1}
                        alt="White ceramic furniture" 
                        className={styles["product-image1"]} 
                    />
                    <div className={styles["product-info"]}>
                        <div className={styles["item-count"]}>5 items</div>
                        <h3 className={styles["product-title1"]}>FURNITURE</h3>
                        <a href="#" className={styles["read-more"]}>Read More</a>
                    </div>
                    </div>
                    
                    {/* Medium product card - Right top */}
                    <div className={`${styles["product-card"]} ${"product-card-medium"}`}>
                        <img 
                            src={Bg2}
                            alt="Pink plant pot" 
                            className={styles["product-image" ]}
                        />
                        <div className={styles["product-info"]}>
                            <div className={styles["item-count"]}>5 items</div>
                            <h3 className={styles["product-title"]}>FURNITURE</h3>
                            <a href="#" className={styles["read-more"]}>Read More</a>
                        </div>
                    </div>
                    
                    {/* Small product cards - Right bottom */}
                    <div className={styles["product-card-small"]}>
                        <div className={styles["small-card"]}>
                            <img 
                            src={Bg3}
                            alt="White lamp"

                            className={styles["product-image" ]}
                            />
                            <div className={styles["product-info"]}>
                                <div className={styles["item-count"]}>5 items</div>
                                <h3 className={styles["product-title"]}>FURNITURE</h3>
                                <a href="#" className={styles["read-more"]}>Read More</a>
                        </div>
                    </div>
                    
                    <div className={styles["small-card"]}>
                        <img 
                        src={Bg4}
                        alt="White vases" 
                        className={styles["product-image"]} 
                        />
                        <div className={styles["product-info"]}>
                            <div className={styles["item-count"]}>5 items</div>
                            <h3 className={styles["product-title"]}>FURNITURE</h3>
                            <a href="#" className={styles["read-more"]}>Read More</a>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </section>
  );
}

export default ProductGrid;