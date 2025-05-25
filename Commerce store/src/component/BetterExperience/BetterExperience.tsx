import background from '../images/background.png';
import '../BetterExperience/BetterExperience.css';

function BetterExperience() {
    return (
        <div className="better-experience-container">
            <div className="better-experience">
                <img src={background} alt="background-img" />
                <div className="better-experience-text">
                    <div className="better-experience-text-left">
                        <h3 className='better-text-left-title'>Designing Better Experience</h3>
                        <h1 className='better-text-left-subtitle'>Problems trying to resolve <br />the conflict between </h1>
                        <p className='better-text-left-description'>Problems trying to resolve the conflict between the two major <br />realms of Classical physics: </p>
                        <p className='price-tag'>$16.48</p>
                        <button className='better-experience-btn'>ADD YOUR CALL TO ACTION</button>
                    </div>   
                </div>
             </div>
        </div>
    )
}

export default BetterExperience;