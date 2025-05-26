import Lady from '../images/Lady.png';
import stars from '../images/stars.png';
import Grouped from '../images/Grouped.png';
import styles from'../Testimonial/Testimonial.module.css';



function Testimonial() {
    return (
        <section className={styles['testimonial-container']}>
            <div className={styles['testimonial-content']}>
                <div className={styles['testimonial']}>
                    <div className={styles['textContent']}>
                        <h2>What they say about us</h2>
                    </div>
                    <div className={styles['testimonial-img1']}>
                        <img src={Lady} alt="lady-picture" />
                    </div>
                    <div className={styles['testimonial-img1']}>
                        <img src={stars} alt="stars-picture" />
                    </div>
                    <div className={styles['image-info']}>
                        <h5>Slate helps you see how many more days you need to work to <br />reach your financial goal.</h5>
                    </div>
                    <div className={styles['p-text']}>
                        <p className={styles['Sname']}>Regina Miles</p>
                        <p className={styles['designation']}>Designer</p>
                    </div>
                </div>

                <aside>
                    <img src={Grouped} alt="pixeated images" />
                </aside>
            </div>
        </section>
    )
}

export default Testimonial;