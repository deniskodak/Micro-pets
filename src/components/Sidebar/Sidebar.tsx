import React, { useCallback, useContext } from 'react'
import pagesConfig from '@pages/pages.json'
import { ItemContext } from '@context/itemContext'
import { Item, ItemContext as ItemContextInterface } from 'commonTypes/Item'

import styles from './Sidebar.module.scss'
import cl from 'classnames'

const Sidebar = () => {
    const { item: activeItem, setItem } = useContext(ItemContext) as ItemContextInterface

    const handleUpdateUrl = useCallback(
        (item: Item) => () => {
            history.replaceState({}, '', item.url)
            setItem(item)
        },
        []
    )

    const items = pagesConfig.map((item) => (
        <li
            key={item.url}
            className={cl(styles.item, {
                [styles.active]: activeItem.url === item.url,
            })}
            onClick={handleUpdateUrl(item)}
        >
            {item.title}
        </li>
    ))

    return <ul className={styles.list}>{items}</ul>
}

export default Sidebar
