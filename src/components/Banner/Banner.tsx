import React from 'react'
import banners from './banners.json'
import images from 'images/banner'

const { Hope, Hunger, SaveChildren, Prytula, MedicalCorp, Razom, Crest } =
    images

import styles from './Banner.module.scss'

const icons = {
    Hope: <Hope />,
    Hunger: <Hunger />,
    SaveChildren: <SaveChildren />,
    Prytula: <Prytula />,
    MedicalCorps: <MedicalCorp />,
    Razom: <Razom />,
    Crest: <Crest />,
}

type IconKey = keyof typeof icons

const Banner = () => {
    return (
        <aside className={styles.banner}>
            <h3 className={styles.bannerTitle}>
                Support Ukraine {icons.Crest}
            </h3>
            <ul>
                {banners.map(({ key, link }) => {
                    return (
                        <li key={key} className={styles.bannerItem}>
                            <a
                                className={styles.bannerLink}
                                href={link}
                                target="_blank"
                            >
                                {icons[key as IconKey]}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default Banner
