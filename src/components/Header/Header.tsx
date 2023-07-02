import React, { FC, useCallback } from 'react'
import Switch from '@mui/material/Switch'
import Button from '@components/Button'
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
interface HeaderInterface {
    isHomePage: boolean
    updateLocation: (url: string) => void
}

const Header: FC<HeaderInterface> = ({ isHomePage, updateLocation }) => {
    const themeLink = document.querySelector('link[href*="-theme.css"]')

    const handleHomeClick = useCallback(
        () => updateLocation('/'),
        [updateLocation]
    )

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
            {!isHomePage && <Button title="home" onClick={handleHomeClick} />}
            <MaterialUISwitch onChange={handleChangeTheme} className={styles.switch} />
        </header>
    )
}

export default Header
