import React from 'react'
import { Image } from 'react-konva'
import useImage from 'use-image'
import { backgrounds } from '../../../../avatarIndex'

const BackgroundImage = ({config}) => {
    

    const [image] = useImage(backgrounds[config.background_index])

    return (
        <Image
        image={image}
        width={window.innerWidth}
        height={window.innerHeight}
        x={0}
        y={0}
        />

    )
}

export default BackgroundImage
