import React from 'react'

import styles from './PageNotFound.module.scss'

const PageNotFound = () => {
    return (
        <section className={styles.section}>
            <h3 className={styles.title}>4 0 4</h3>
            <b className={styles.subTitle}>Sorry, the page not found</b>
            <p className={styles.description}>
                The link you followed probably broken or the page has been
                removed.
            </p>
        </section>
    )
}

export default PageNotFound
