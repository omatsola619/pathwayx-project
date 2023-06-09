import React from 'react';
import styles from 'styles/SkillCategory.module.css';
import Footer from './Footer';
import Header from './Header';

function SkillCategory({ children }: React.PropsWithChildren) {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.children}>{children}</div>
            <Footer />
        </div>
    )
}

export default SkillCategory;