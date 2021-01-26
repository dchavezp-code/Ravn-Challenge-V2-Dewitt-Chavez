import { Divider } from '@material-ui/core'
import React from 'react'
import styles from './dataCell.module.css'
function DataCell({ characteristic, detail }) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.characteristic}>{characteristic}</div>
                <div className={styles.detail}>{detail}</div>
            </div>
            <Divider/>
        </div>
    )
}

export default DataCell
