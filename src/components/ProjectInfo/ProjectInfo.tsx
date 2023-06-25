import React, { useContext } from 'react'

import { ItemContext } from '@context/itemContext'
import { ItemContext as ItemContextInterface } from 'commonTypes/Item'

import styles from './ProjectInfo.module.scss'

const ProjectInfo = () => {
    const { item } = useContext(ItemContext) as ItemContextInterface

    const getTitle = () => {
        const fullTitle = item.title.split(' ')
        const lastWord = fullTitle.pop()
        return (
            <h2 className={styles.title}>
                {fullTitle.join(' ') + " "}
                <span className={styles.titleDecor}>{lastWord}</span>
            </h2>
        )
    }

    return (
        <div className={styles.projectInfo}>
            {getTitle()}
            <p className={styles.description}>{item.description}</p>
        </div>
    )
}

export default ProjectInfo
