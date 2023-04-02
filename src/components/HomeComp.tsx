import styles from 'styles/Home.module.css';
import Header from './Header';

function HomeComp() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
                <div className={styles.heroSection}>
                    <div className={styles.heroTitle}>
                        Your dream tech Career learning <span style={{color: '#2663eb'}}>roadmap</span>
                    </div>
                    <div className={styles.heroDesc}>
                        PathWayX is a platform that offers roadmap, Practical advice, insights,
                        and resources to help you navigate the digital landscape with confidence
                    </div>
                </div>
            </header>
        </div>
    )
}

export default HomeComp;