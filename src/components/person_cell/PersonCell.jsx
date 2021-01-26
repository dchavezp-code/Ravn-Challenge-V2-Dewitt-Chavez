import React from 'react'
import styles from './personCell.module.css'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
function PersonCell({ person }) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    {person.name}
                </div>
                <div className={styles.description}>
                    {(person.species === null ? "Human" : person.species.name) + " from " + person.homeworld.name}
                </div>
            </div>
            <div className={styles.button}>
                {/*Send the data to the route /person-details/:id*/}
                <Link to={{
                    pathname: `/person-details/${person.id}`,
                    data: { person } // your data array of objects
                }}>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                </Link>
            </div>
        </div>
    )
}

export default PersonCell
