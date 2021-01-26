import React from 'react'
import styles from './notice_failed_load.module.css'
export const NoticeFailedLoad = ({ message }) => {
    return (
        <div className={styles.container}>
            <div className={styles.message}>{message}</div>
        </div>
    )
}
