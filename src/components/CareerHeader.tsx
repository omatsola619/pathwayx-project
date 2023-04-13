import styles from 'styles/CareerHeader.module.css'
import PageLinks from './PageLinks';

interface CareerType{
    title: string;
    desc: string;
    prevLink: string;
    currLink: string;
}

const CareerHeader: React.FunctionComponent<CareerType> = ({title, desc, prevLink, currLink}) => {
    return (
        <div className={styles.container}>
            <PageLinks prevLink={prevLink} currLink={currLink} />
            <div className={styles.headerInfo}>
                <div className={styles.headerText}>{title}</div>
                <div className={styles.headerDesc}>{desc}</div>
            </div>
            <div className={styles.headerActions}>
                <div className={styles.btn1}>Other Roadmaps</div>
                <div className={styles.btn2}>Share</div>
            </div>
        </div>
    )
}

export default CareerHeader;