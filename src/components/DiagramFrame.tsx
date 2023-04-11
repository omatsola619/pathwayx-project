import styles from 'styles/DiagramFrame.module.css'
import Header from './Header';
import Footer from './Footer';

function DiagramFrame({ children }: React.PropsWithChildren) {
    return (
        <div className={styles.container}>
            <div className={styles.headerSection}>
                <Header noLine />
            </div>
            <div className={styles.children}>{children}</div>
            <div className={styles.footerSection}>
                <Footer noLine />
            </div>
        </div>
    )
}

export default DiagramFrame;
