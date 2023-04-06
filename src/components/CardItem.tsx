import styles from 'styles/CardItem.module.css'
import { DataType } from 'src/data/DummyData';

function CardItem({data}: {data: DataType}) {
    return (
        <div className={styles.roadmapCards}>
            <div className={styles.card}>
                <div className={styles.cardBorder}>
                    <data.icon className={styles.cardIcon} />
                </div>
            </div>
            <div className={styles.cardTitle}>
                <div className={styles.cardText}>{data.name}</div>
            </div>
        </div>
    )
}

export default CardItem;