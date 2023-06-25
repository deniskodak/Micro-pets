import React, { useEffect } from 'react'
import Switch from '@mui/material/Switch'
import Logo from '@components/Logo'

import styles from './Header.module.scss'

const themesMap = {
    'light-theme': 'dark-theme',
    'dark-theme': 'light-theme',
}

type Theme = keyof typeof themesMap

const Header = () => {
    useEffect(() => {
        handleChangeTheme()
    }, [])

    const handleChangeTheme = () => {
        const themeLink = document.querySelector('link[href*="-theme.css"]');
        if (!themeLink) return
        const href = themeLink.getAttribute('href')
        if(!href) return
        const themeName = href.match(/\/([^/]+)\.css$/)?.[1] || 'light-theme';
        const newHref = href.replace(themeName, themesMap[themeName as Theme])
        themeLink.setAttribute('href', newHref)
    }

    return (
        <header className={styles.header}>
            <Logo />
            <Switch onChange={handleChangeTheme}/>
        </header>
    )
}

export default Header
