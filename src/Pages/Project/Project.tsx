import React, { FC } from 'react'
import * as modules from './modules'
import Banner from '@components/Banner'
import PageNotFound from '@pages/Project/PageNotFound'
import pagesConfig from '@pages/pages.json'

const { HoverBoard, ImageFinder, TicTacToe } = modules

const moduleMapping = {
    HoverBoard: <HoverBoard />,
    ImageFinder: <ImageFinder />,
    TicTacToe: <TicTacToe />,
}

import styles from './Project.module.scss'

interface ProjectInterface {
    location: string
    updateLocation: (url: string) => void
}
type Module = keyof typeof modules

const DEFAULT_PROJECT_URL = 'Micro-pets'

const Project: FC<ProjectInterface> = ({ location, updateLocation }) => {
    const [projectUrl, moduleUrl] = location.split('/').filter(Boolean)
    const page = pagesConfig.find((page) => page.key === moduleUrl)

    if (projectUrl !== DEFAULT_PROJECT_URL) updateLocation('/')

    return (
        <section className={styles.section}>
            <Banner />
            <div className={styles.project}>
                <h2 className={styles.title}>
                    {page?.title ? page?.title : 'Project not'}
                    <span className={styles.titleDecor}>
                        {page?.title ? ' Project' : ' Found'}
                    </span>
                </h2>
                {modules[moduleUrl as Module] && page ? (
                    moduleMapping[moduleUrl as Module]
                ) : (
                    <PageNotFound />
                )}
            </div>
        </section>
    )
}

export default Project
