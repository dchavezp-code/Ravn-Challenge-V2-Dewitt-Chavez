import React from 'react';
import Header from '../../components/header/Header';
import RetrievePeopleData from './MainLogic';
import styles from './main.module.css'
import {List} from '@material-ui/core'
function Main() {
    return (
        <div className={styles.container}>
            <Header title={"People of the Star Wars"} hasButtonBack={false} />
            <List className={styles.list}>
                <RetrievePeopleData first={5} />
            </List>
        </div>
    )
}

export default Main
