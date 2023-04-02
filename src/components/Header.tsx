import styles from 'styles/Header.module.css'

function Header() {
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
            </div>
            <div className={styles.line}></div>
        </div>
    )
}

export default Header;