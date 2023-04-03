import styles from 'styles/MobileMenu.module.css'
import { AiOutlineClose } from "react-icons/ai";

function MobileMenu({ setMenu }: { setMenu: any }) {
    return (
        <div className={styles.container}>
            <AiOutlineClose className={styles.cancelBtn} onClick={() => setMenu(false)} />
            <div className={styles.links}>
                <div className={styles.linkItems}>
                    <a href="#">Fields</a>
                    <a href="#">Jobs</a>
                    <a href="#">Roadmaps</a>
                    <a href="#">Help</a>
                    <a href="#" style={{color: '#2663eb'}}>Join us</a>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;