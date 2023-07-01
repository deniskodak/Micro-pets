import React, { useContext, useMemo } from 'react'
import pagesConfig from '@pages/pages.json'
import { TabContextInterface } from 'commonTypes/Tab'
import { TabContext } from '@context/tabContext'
import ProjectItem from './ProjectItem'

import styles from './ProjectList.module.scss'
export type PageConfig = typeof pagesConfig[0]

const ProjectList = () => {
    const { activeTab, defaultTab } = useContext(
        TabContext
    ) as TabContextInterface

    const listItems = useMemo(
        () =>
            pagesConfig
                .filter((config) => config.tags.includes(activeTab))
                .map((config) => (
                    <ProjectItem
                        key={config.key}
                        pageConfig={config}
                        defaultTab={defaultTab}
                    />
                )),
        [activeTab, defaultTab]
    )

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>
                {activeTab} <span className={styles.titleDecor}>Projects</span>
            </h2>
            <ul className={styles.list}>{listItems}</ul>
        </section>
    )
}

export default ProjectList
