import styles from 'styles/Footer.module.css'
import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.line}></div>
            <div className={styles.footerInfo}>
                <div className={styles.info}>PathwayX roadmap and learning tracker</div>
                <div className={styles.socials}>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaGithub />
                </div>
            </div>
        </div>
    )
}

export default Footer;