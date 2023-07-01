import React from 'react'
import Loader from '@components/Loader'

// const TicTacToe = React.lazy(() => import('TicTacToeApp/TicTacToe'))

import styles from './TicTacToe.module.scss'

const TicTacToePage = () => {
    return (
        <div className={styles.TicTacToeWrapper} id="tictactoe">
            <React.Suspense fallback={<Loader />}>
                {/* <TicTacToe /> */}
            </React.Suspense>
        </div>
    )
}

export default TicTacToePage
