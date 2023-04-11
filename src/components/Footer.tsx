import styles from 'styles/Footer.module.css'
import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

interface FooterProps {
    noLine?: boolean;
}

const Footer: React.FunctionComponent<FooterProps> = ({noLine}) => {
    return (
        <div className={styles.container}>
            {!noLine && <div className={styles.line}></div>}
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