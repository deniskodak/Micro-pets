import React from 'react'
import Loader from '@components/Loader'

const HoverBoardModule = React.lazy(() => import('HoverBoardApp/HoverBoard'))

import styles from './HoverBoard.module.scss'

const HoverBoard = () => {
    return (
        <div className={styles.HoverBoardWrapper} id="hoverBoard">
            <React.Suspense fallback={<Loader />}>
                <HoverBoardModule />
            </React.Suspense>
        </div>
    )
}

export default HoverBoard
