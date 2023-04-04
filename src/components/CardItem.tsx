import styles from 'styles/CardItem.module.css'
import { RiPenNibFill } from "react-icons/ri";

function CardItem() {
    return (
        <div className={styles.roadmapCards}>
            <div className={styles.card}>
                <div className={styles.cardBorder}>
                    <RiPenNibFill className={styles.cardIcon} />
                </div>
            </div>
            <div className={styles.cardTitle}>Design</div>
        </div>
    )
}

export default CardItem;