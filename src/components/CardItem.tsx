import styles from 'styles/CardItem.module.css'
import { RiPenNibFill } from "react-icons/ri";
import { DataType } from 'src/data/DummyData';

function CardItem({data}: {data: DataType}) {
    return (
        <div className={styles.roadmapCards}>
            <div className={styles.card}>
                <div className={styles.cardBorder}>
                    <data.icon className={styles.cardIcon} />
                </div>
            </div>
            <div className={styles.cardTitle}>{data.name}</div>
        </div>
    )
}

export default CardItem;