import { useState } from 'react';
import styles from 'styles/Home.module.css';
import Header from './Header';
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

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
                    {/* <div className={styles.chevron}>
                        <HiOutlineChevronDoubleDown />
                    </div> */}
                    <div className={styles.actionBtn}>Start your journey</div>
                </div>
            </header>
            <div className={styles.section2}>

            </div>
        </div>
    )
}

export default HomeComp;