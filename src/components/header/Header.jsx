import React from 'react';
import styles from './header.module.css';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
function Header({ title, hasButtonBack }) {
    return (
        <div className={styles.container}>
            {hasButtonBack ?
                <div className={styles.backButton}>
                  <IconButton>
                    <ArrowBackIcon/>
                  </IconButton>  
                </div> :""
            }
            <h1 className={styles.title}>{title}</h1>
        </div>
    )
}

export default Header
