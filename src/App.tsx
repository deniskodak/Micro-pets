import React, { useLayoutEffect, useState } from 'react'
import Header from '@components/Header'
import Sidebar from '@components/Sidebar'
import ProjectInfo from '@components/ProjectInfo'

import pagesConfig from '@pages/pages.json'

import { ItemContext } from '@context/itemContext'
import { Item } from 'commonTypes/Item'

import * as pages from '@pages/index'

const [defaultItem] = pagesConfig

import './App.scss'
console.log(pages, 'pages')
const App = () => {
    const [activeItem, setActiveItem] = useState<Item>(defaultItem)

    const setInitialItem = () => {
        const item =
            pagesConfig.find(({ url }) => url === window.location.pathname) ||
            defaultItem
        setActiveItem(item)
    }

    const PageComponent = pages[activeItem.key as keyof typeof pages]

    useLayoutEffect(() => {
        setInitialItem()
    }, [])

    return (
        <ItemContext.Provider
            value={{ item: activeItem, setItem: setActiveItem }}
        >
            <div className="App">
                <Header />
                <section className="main-section">
                    <Sidebar />
                    <section className="project-section">
                        <ProjectInfo />
                        <PageComponent /> 
                    </section>
                </section>
            </div>
        </ItemContext.Provider>
    )
}

export default App
