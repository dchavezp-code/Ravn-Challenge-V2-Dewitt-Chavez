import React from 'react';
import styles from './header.module.css';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

function Header({ title, hasButtonBack }) {
  /*This method add the "button back" to the Header*/
  const setButtonBack=()=>{
    return hasButtonBack &&
      (
        <div className={styles.backButton}>
          <Link to={"/"}>
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </div>
      );
  }
  return (
    <div className={styles.container}>
      {setButtonBack()}
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}

export default Header
