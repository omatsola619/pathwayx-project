import styles from 'styles/Accordion.module.css'
import React, { useState } from 'react';

const Accordion = ({ title, content }: {title: string, content: string}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.accordionContainer}>
      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className={`${styles.accordionIcon} ${isExpanded ? styles.rotate : ''}`}>+</span>
      </div>
      {isExpanded && (
        <div className={styles.accordionContent}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
