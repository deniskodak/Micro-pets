import React, { useEffect, useRef } from 'react'

import style from './ImageFinder.module.scss'

const ImageFinder = () => {
    const formRef = useRef(null)
    const imageRef = useRef(null)

    const setImageFinder = async () => {
        const {default: Render} = await import('ImageFinderApp/ImageFinder')
        const render = new Render(imageRef.current, formRef.current)
        render.init()
    }

    useEffect(() => {
        setImageFinder()
    }, [])

    return (
        <div className={style.wrapper}>
            <div ref={formRef}></div>
            <div ref={imageRef} className={style.imageWrapper}></div>
        </div>
    )
}

export default ImageFinder
