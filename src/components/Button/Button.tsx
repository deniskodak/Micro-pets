import React, { FC } from 'react'

import styles from './Button.module.scss'

interface ButtonInterface {
    title: string
    onClick: () => void
}

const Button: FC<ButtonInterface> = ({ title, onClick }) => {
    return <button className={styles.button} onClick={onClick}>{title}</button>
}

export default Button
