import React, { FC, useContext } from 'react'
import { ItemContext } from '@context/itemContext'
import { ItemContext as ItemContextInterface } from 'commonTypes/Item'

import * as imagesUrls from 'images/projectList'
import { PageConfig } from '../ProjectList'

type ImageUrl = keyof typeof imagesUrls
interface ProjectItem {
    pageConfig: PageConfig
    defaultTab: string
}

import styles from './ProjectItem.module.scss'

const ProjectItem: FC<ProjectItem> = ({ pageConfig, defaultTab }) => {
    const { key, title, tags } = pageConfig
    const { setItem } = useContext(ItemContext) as ItemContextInterface

    const handleImageClick = () => setItem(pageConfig)

    return (
        <li className={styles.item}>
            <figure className={styles.figure}>
                <picture>
                    <source
                        srcSet={imagesUrls[(key + 'Sm') as ImageUrl]}
                        media="(max-width: 767px)"
                    />
                    <source
                        srcSet={imagesUrls[(key + 'Md') as ImageUrl]}
                        media="(min-width: 768px)"
                    />
                    <source
                        srcSet={imagesUrls[(key + 'Xl') as ImageUrl]}
                        media="(min-width: 1199px)"
                    />
                    <img
                        onClick={handleImageClick}
                        src={imagesUrls[(key + 'Sm') as ImageUrl]}
                        alt={title + 'project'}
                    />
                </picture>
                <figcaption>
                    <h3>{title}</h3>
                    <i className={styles.description}>
                        {tags.filter((tag) => tag !== defaultTab).join(', ')}
                    </i>
                </figcaption>
            </figure>
        </li>
    )
}

export default ProjectItem
