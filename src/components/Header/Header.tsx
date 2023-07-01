import React from 'react'
import Switch from '@mui/material/Switch'
import Logo from '@components/Logo'
import { styled } from '@mui/material/styles'

import styles from './Header.module.scss'

const themesMap = {
    'light-theme': 'dark-theme',
    'dark-theme': 'light-theme',
}

const MaterialUISwitch = styled(Switch)(() => ({
    '& .MuiSwitch-switchBase': {
        '&.Mui-checked': {
            color: '#eac645',
            '& + .MuiSwitch-track': {
                backgroundColor: '#eac645',
            },
        },
    },
}))

type Theme = keyof typeof themesMap

const Header = () => {
    const themeLink = document.querySelector('link[href*="-theme.css"]')

    const handleChangeTheme = () => {
        if (!themeLink) return
        const href = themeLink.getAttribute('href')
        if (!href) return
        const themeName = href.match(/\/([^/]+)\.css$/)?.[1] || 'light-theme'
        const newHref = href.replace(themeName, themesMap[themeName as Theme])
        themeLink.setAttribute('href', newHref)
    }

    return (
        <header className={styles.header}>
            <Logo />
            <MaterialUISwitch onChange={handleChangeTheme} />
        </header>
    )
}

export default Header
