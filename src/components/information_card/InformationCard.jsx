import React from 'react'
import styles from './information.module.css'
function InformationCard({title, content}) {
    return (
        <div className={styles.contentInformation}>
            <div className={styles.titleContent}>{title}</div>
            {content}
        </div>
    )
}

export default InformationCard
