import React, { FC, useCallback } from 'react'
import { Item } from 'commonTypes/Item'
import Button from '@components/Button'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import * as imagesUrls from 'images/projectList'

import styles from './ProjectModal.module.scss'

interface ProjectModalInterface {
    defaultTag: string
    updateLocation: (url: string) => void
    item: Item
    setItem: React.Dispatch<React.SetStateAction<Item | null>>
}

const ProjectModal: FC<ProjectModalInterface> = ({
    defaultTag,
    item,
    setItem,
    updateLocation,
}) => {
    const handleCancel = useCallback(() => setItem(null), [])

    const handleUpdateUrl = useCallback(() => {
        updateLocation(item.url)
        handleCancel()
    }, [handleCancel])

    return (
        <Modal
            open={true}
            onClose={handleCancel}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className={styles.wrapper}>
                <CloseIcon
                    className={styles.closeIcon}
                    onClick={handleCancel}
                    tabIndex={0}
                />
                <img
                    src={
                        imagesUrls[(item.key + 'Xl') as keyof typeof imagesUrls]
                    }
                    alt={item.title}
                />
                <section className={styles.modalInfo}>
                    <h6 id="modal-modal-title" className={styles.title}>
                        {item.title}
                    </h6>
                    <i className={styles.subTitle}>
                        {item.tags
                            .filter((tag) => tag !== defaultTag)
                            .join(', ')}
                    </i>
                    <p id="modal-modal-description">{item.description}</p>
                </section>
                <Button title="Open project" onClick={handleUpdateUrl} />
            </div>
        </Modal>
    )
}

export default ProjectModal
