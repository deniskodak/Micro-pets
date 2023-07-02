import React, { useEffect, useState } from 'react'
import Header from '@components/Header'
import Home from '@pages/Home'
import Project from '@pages/Project'
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
    const [location, setLocation] = useState(window.location.pathname)
    const isHomePage = location === '/'

    const updateLocation = (url: string) => {
        setLocation(url)
        history.replaceState({}, '', url)
    }

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
                    <Header
                        isHomePage={isHomePage}
                        updateLocation={updateLocation}
                    />
                    {isHomePage ? <Home /> : <Project />}
                    {activeItem && (
                        <ProjectModal
                            item={activeItem}
                            setItem={setActiveItem}
                            defaultTag={DEFAULT_TAB}
                            updateLocation={updateLocation}
                        />
                    )}
                </div>
            </ItemContext.Provider>
        </TabContext.Provider>
    )
}

export default App
