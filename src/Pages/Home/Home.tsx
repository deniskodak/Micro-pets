import React from 'react'
import Sidebar from '@components/Sidebar'
import Banner from '@components/Banner'
import ProjectList from '@components/ProjectList'

import styles from './Home.module.scss'

const Home = () => {
    return (
        <section className={styles.mainSection}>
            <div className={styles.sideWrapper}>
                <Sidebar />
                <Banner />
            </div>
            <ProjectList />
        </section>
    )
}

export default Home
