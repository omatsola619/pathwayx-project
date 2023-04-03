import styles from 'styles/Header.module.css'
import {RxHamburgerMenu} from "react-icons/rx"
import MobileMenu from './MobileMenu';
import { useState } from 'react';

function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.headerItems}>
                <div className={styles.logo}>
                    <div className={styles.icon}>Px</div>
                    <div className={styles.logoText}>pathwayx.dev</div>
                </div>
                <nav className={styles.nav}>
                    <a href="#">Fields</a>
                    <a href="#">Jobs</a>
                    <a href="#">Roadmaps</a>
                    <a href="#">Help</a>
                    <div className={styles.joinBtn}>Join Us</div>
                </nav>
                <RxHamburgerMenu className={styles.hamburger} onClick={() => setShowMobileMenu(true)} />
            </div>
            {
                showMobileMenu && <MobileMenu setMenu={setShowMobileMenu}/>
            }
            
            <div className={styles.line}></div>
        </div>
    )
}

export default Header;