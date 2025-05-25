/* JSX Component */
import Bg1 from '../images/Bg1.png';
import Bg2 from '../images/Bg2.png';
import Bg3 from '../images/Bg3.png';
import Bg4 from '../images/Bg4.png';
import '../Hero/Hero.css';

function ProductGrid() {
  return (
    <section className="product-grid-section">
        <div className="product-grid-container">
            <div className="product-grid">
                {/* Large product card - Left column */}
                <div className="product-card product-card-large">
                    <img 
                        src={Bg1}
                        alt="White ceramic furniture" 
                        className="product-image1" 
                    />
                    <div className="product-info">
                        <div className="item-count">5 items</div>
                        <h3 className="product-title1">FURNITURE</h3>
                        <a href="#" className="read-more">Read More</a>
                    </div>
                    </div>
                    
                    {/* Medium product card - Right top */}
                    <div className="product-card product-card-medium">
                        <img 
                            src={Bg2}
                            alt="Pink plant pot" 
                            className="product-image" 
                        />
                        <div className="product-info">
                            <div className="item-count">5 items</div>
                            <h3 className="product-title">FURNITURE</h3>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    </div>
                    
                    {/* Small product cards - Right bottom */}
                    <div className="product-card-small">
                        <div className="small-card">
                            <img 
                            src={Bg3}
                            alt="White lamp"

                            className="product-image" 
                            />
                            <div className="product-info">
                                <div className="item-count">5 items</div>
                                <h3 className="product-title">FURNITURE</h3>
                                <a href="#" className="read-more">Read More</a>
                        </div>
                    </div>
                    
                    <div className="small-card">
                        <img 
                        src={Bg4}
                        alt="White vases" 
                        className="product-image" 
                        />
                        <div className="product-info">
                            <div className="item-count">5 items</div>
                            <h3 className="product-title">FURNITURE</h3>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </section>
  );
}

export default ProductGrid;