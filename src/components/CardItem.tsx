import styles from 'styles/CardItem.module.css'
import { DataType } from 'src/data/DummyData';

function CardItem({data}: {data: DataType}) {
    return (
        <div className={styles.roadmapCards}>
            <a href="/" className={styles.card}>
                <div className={styles.cardBorder}>
                    <data.icon className={styles.cardIcon} />
                </div>
            </a>
            <div className={styles.cardTitle}>
                <div className={styles.cardText}>{data.name}</div>
            </div>
        </div>
    )
}

export default CardItem;