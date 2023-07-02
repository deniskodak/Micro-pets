import React, { useEffect, useState } from 'react'
import Header from '@components/Header'
import Sidebar from '@components/Sidebar'
import Banner from '@components/Banner'
import ProjectList from '@components/ProjectList'
import ProjectModal from '@components/ProjectModal'

import { ItemContext } from '@context/itemContext'
import { TabContext } from '@context/tabContext'

import { Item } from 'commonTypes/Item'

const DEFAULT_TAB = 'All'

import './App.scss'

const removeLoader = () => {
    const loader = document.querySelector('#loader')
    loader?.remove()
}

const App = () => {
    const [activeItem, setActiveItem] = useState<Item | null>(null)
    const [activeTab, setActiveTab] = useState(DEFAULT_TAB)

    useEffect(() => {
        removeLoader()
    }, [])

    return (
        <TabContext.Provider
            value={{ activeTab, setActiveTab, defaultTab: DEFAULT_TAB }}
        >
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
                    </section>
                    {activeItem && (
                        <ProjectModal
                            item={activeItem}
                            setItem={setActiveItem}
                            defaultTag={DEFAULT_TAB}
                        />
                    )}
                </div>
            </ItemContext.Provider>
        </TabContext.Provider>
    )
}

export default App
