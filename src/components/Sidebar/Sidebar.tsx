import React, { useCallback, useContext } from 'react'
import pagesConfig from '@pages/pages.json'
import { TabContextInterface } from 'commonTypes/Tab'
import { TabContext } from '@context/tabContext'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import styles from './Sidebar.module.scss'

const tags = pagesConfig.reduce((acc: string[], pageConfig) => {
    const pageTags = pageConfig.tags
    pageTags.forEach((tag) => {
        if (!acc.includes(tag)) acc.push(tag)
    })
    return acc
}, [])

const Sidebar = () => {
    const { activeTab, setActiveTab } = useContext(
        TabContext
    ) as TabContextInterface

    const handleChangeTap = useCallback(
        (e: React.SyntheticEvent<Element, Event>, value: string) => {
            setActiveTab(value)
        },
        []
    )

    return (
        <div>
            <Tabs
                orientation="vertical"
                value={activeTab}
                onChange={handleChangeTap}
                variant="scrollable"
                className={styles.tabs}
                scrollButtons="auto"
                aria-label="sidebar tabs"
            >
                {tags.map((tag) => (
                    <Tab
                        key={tag}
                        label={tag}
                        value={tag}
                        className={styles.tab}
                    />
                ))}
            </Tabs>
        </div>
    )
}

export default Sidebar
