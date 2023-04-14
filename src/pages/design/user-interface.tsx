import CareerHeader from 'components/CareerHeader';
import DiagramFrame from 'components/DiagramFrame';
import styles from 'styles/UserInterface.module.css'
import { TbRoad } from "react-icons/tb";
import RoadmapAccordion from 'components/RoadmapAccordion';

function UserInterface() {
    return (
        <DiagramFrame>
            <div className={styles.container}>
                <div className={styles.header}>
                    <CareerHeader 
                        title="User Interface Design"
                        desc="The latest and complete guide for user interface designer 2023"
                        prevLink='design'
                        currLink='ui' 
                    />
                </div>
                <section className={styles.content}>
                    <div className={styles.contentHeader}>Roadmap</div>
                    <div className={styles.pathWrapper}>
                        <div className={styles.pathTitle}>
                            <div className={styles.pathTitleIcon}><TbRoad /></div>
                            <span>Welcome To User Interface Design</span>
                        </div>
                        <div className={styles.accordionSection}>
                            <RoadmapAccordion title="Introduction" />
                            <RoadmapAccordion title="Understanding Human Decision Making" />
                            <RoadmapAccordion title="Behavior Change Strategies" />
                        </div>
                    </div>
                </section>
            </div>
        </DiagramFrame>
    )
}

export default UserInterface;
