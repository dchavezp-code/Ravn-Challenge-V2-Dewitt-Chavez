import React from 'react'
import styles from './personCell.module.css'
function PersonCell({person}) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    {person.name}
                </h1>
                <h2 className={styles.description}>
                    {(person.species===null?"human":person.species.name)+" from "+person.homeworld.name}
                </h2>
            </div>
            <div className={styles.button}>
            </div>
        </div>
    )
}

export default PersonCell
