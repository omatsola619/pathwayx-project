import { useState } from 'react';
import styles from 'styles/Home.module.css';
import CardItem from './CardItem';
import Header from './Header';
import {DATA} from '../data/DummyData'

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
                        PathWayX is a place that provides roadmap, insights,
                        and resources to help you navigate the digital landscape with confidence
                    </div>
                    <div className={styles.actionBtn}>Start your journey</div>
                </div>
            </header>
            <div className={styles.roadmaps}>
                <div className={styles.roadmapTitle}>Select Career To Check Roadmap</div>
                <div className={styles.cardsSection}>
                    {
                        DATA.map((item) => {
                            return <CardItem data={item} />;
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeComp;