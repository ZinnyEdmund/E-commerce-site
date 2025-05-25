import Lady from '../images/Lady.png';
import stars from '../images/stars.png';
import Grouped from '../images/Grouped.png';
import '../Testimonial/Testimonial.css';



function Testimonial() {
    return (
        <section className='testimonial-container'>
            <div className='testimonial-content'>
                <div className='testimonial'>
                    <div className='textContent'>
                        <h2>What they say about us</h2>
                    </div>
                    <div className='testimonial-img1'>
                        <img src={Lady} alt="lady-picture" />
                    </div>
                    <div className='testimonial-img1'>
                        <img src={stars} alt="stars-picture" />
                    </div>
                    <div className='image-info'>
                        <h5>Slate helps you see how many more days you need to work to <br />reach your financial goal.</h5>
                    </div>
                    <div className='p-text'>
                        <p className='Sname'>Regina Miles</p>
                        <p className='designation'>Designer</p>
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