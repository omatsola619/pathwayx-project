import styles from 'styles/RoadmapAccordion.module.css'
import React, { useState } from 'react';
import { BsChevronDown } from "react-icons/bs";

interface MyType {
    title: string;
}

const RoadmapAccordion: React.FunctionComponent<MyType> = ({title}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAccordion = () => {
      setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles.accordionContainer}>
      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className={`${styles.accordionIcon} ${isExpanded ? styles.rotate : ''}`}><BsChevronDown /></span>
      </div>
      {isExpanded && (
        <div className={styles.accordionContent}>
          <p>My content goes here</p>
        </div>
      )}
    </div>
    )
}

export default RoadmapAccordion;