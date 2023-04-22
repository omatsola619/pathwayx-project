import CareerHeader from 'components/CareerHeader';
import DiagramFrame from 'components/DiagramFrame';
import styles from 'styles/UserInterface.module.css'
import { TbRoad } from "react-icons/tb";
import RoadmapAccordion from 'components/RoadmapAccordion';
import { TopicTypes } from 'src/types';
import TopicsLayout from 'components/TopicsLayout';


const courseTopics: TopicTypes[] = [
    {
        title: 'Nudge Theory',
        importance: true,
        link: ''
    },
    {
        title: 'Behavior design',
        importance: false,
        link: ''
    },
    {
        title: 'Persuasive technology',
        importance: true,
        link: ''
    },
    {
        title: 'Dual process Theory',
        importance: true,
        link: ''
    },
]


function UserInterface() {
    return (
      <DiagramFrame>
        <div className={styles.container}>
          <div className={styles.header}>
            <CareerHeader
              title="User Interface Design"
              desc="The latest and complete guide for user interface designer 2023"
              prevLink="design"
              currLink="ui"
            />
          </div>
          <section className={styles.content}>
            <div className={styles.contentHeader}>Roadmap</div>
            <div className={styles.pathWrapper}>
              <div className={styles.pathTitle}>
                <div className={styles.pathTitleIcon}>
                  <TbRoad />
                </div>
                <span>Welcome To User Interface Design</span>
              </div>
              <div className={styles.accordionSection}>
                <RoadmapAccordion title="Introduction">
                 <TopicsLayout data={courseTopics} />
                </RoadmapAccordion>

                <RoadmapAccordion title="Understanding Human Decision Making">
                  My content goes here
                </RoadmapAccordion>
                <RoadmapAccordion title="Behavior Change Strategies">
                  My content goes here
                </RoadmapAccordion>
              </div>
            </div>
          </section>
        </div>
      </DiagramFrame>
    );
}

export default UserInterface;
