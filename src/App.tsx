import React, { useLayoutEffect, useState } from 'react'
import Header from '@components/Header'
import Sidebar from '@components/Sidebar'
import Banner from '@components/Banner'
import ProjectList from '@components/ProjectList'

import pagesConfig from '@pages/pages.json'

import { ItemContext } from '@context/itemContext'
import { TabContext } from '@context/tabContext'

import { Item } from 'commonTypes/Item'

// import * as pages from '@pages/index'

const [defaultItem] = pagesConfig
const DEFAULT_TAB = 'All'

import './App.scss'

const removeLoader = () => {
    const loader = document.querySelector('#loader')
    window.onload = () => loader?.remove()
}

const App = () => {
    const [activeItem, setActiveItem] = useState<Item>(defaultItem)
    const [activeTab, setActiveTab] = useState(DEFAULT_TAB)

    const setInitialItem = () => {
        const item =
            pagesConfig.find(({ url }) => url === window.location.pathname) ||
            defaultItem
        setActiveItem(item)
    }

    // const PageComponent = pages[activeItem.key as keyof typeof pages]

    useLayoutEffect(() => {
        setInitialItem()
        removeLoader()
    }, [])

    return (
        <TabContext.Provider value={{ activeTab, setActiveTab, defaultTab: DEFAULT_TAB }}>
            <ItemContext.Provider
                value={{ item: activeItem, setItem: setActiveItem }}
            >
                <div className="App">
                    <Header />
                    <section className="main-section">
                        <div className="side-wrapper">
                            <Sidebar />
                            <Banner />
                        </div>
                        <ProjectList />
                        {/* <section className="project-section"> */}
                        {/* <PageComponent /> */}
                        {/* </section> */}
                    </section>
                </div>
            </ItemContext.Provider>
        </TabContext.Provider>
    )
}

export default App
