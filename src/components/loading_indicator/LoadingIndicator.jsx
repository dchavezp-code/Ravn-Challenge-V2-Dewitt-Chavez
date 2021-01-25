import React from 'react'
import createDivsForSpinner from '../../helper/createDinamicComponents'
import styles from './loading_indicator.module.css'

function LoadingIndicator() {
    return (
        <div className={styles.container}>
            <h3 className={styles.text}>Loading</h3>
            <div className={styles.ldsSpinner}>
                {createDivsForSpinner({totalDivs:12})}
            </div>
        </div>
    )
}

export default LoadingIndicator
