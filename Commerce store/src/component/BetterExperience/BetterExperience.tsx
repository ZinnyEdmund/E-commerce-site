import styles from '../BetterExperience/BetterExperience.module.css';

function BetterExperience() {
    return (
        <div className={styles["better-experience-container"]}>
            <div className={styles["better-experience"]}>
                <div className={styles["better-experience-text"]}>
                    <div className={styles["better-experience-text-left"]}>
                        <h3 className={styles["better-text-left-title"]}>Designing Better Experience</h3>
                        <h1 className={styles["better-text-left-subtitle"]}>Problems trying to resolve <br />the conflict between </h1>
                        <p className={styles['better-text-left-description']}>Problems trying to resolve the conflict between the two major <br />realms of Classical physics: </p>
                        <p className={styles['price-tag']}>$16.48</p>
                        <button className={styles['better-experience-btn']}>ADD YOUR CALL TO ACTION</button>
                    </div>   
                </div>
             </div>
        </div>
    )
}

export default BetterExperience;