import { AiOutlineCheckSquare } from "react-icons/ai";
import { AiOutlineBorder } from "react-icons/ai";
import { TopicTypes } from "src/types";
import styles from 'styles/TopicsLayout.module.css'


function TopicsLayout({data}: {data: TopicTypes[]}) {
    return (
      <div className={styles.topicWrapper}>
        {data.map((topic, i) => {
          return (
            <div className={styles.topic} key={i}>
              {topic.importance ? (
                <AiOutlineCheckSquare className={styles.topicIcon} />
              ) : (
                <AiOutlineBorder className={styles.topicIcon} />
              )}
              <span className={styles.topicText}>{topic.title}</span>
            </div>
          );
        })}
      </div>
    );
}

export default TopicsLayout;