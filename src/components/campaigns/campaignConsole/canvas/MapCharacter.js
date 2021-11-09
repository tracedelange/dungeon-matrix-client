import React from 'react'
import { Image } from 'react-konva'
import Hunter from '../../../../assets/hunter-200.png'
import useImage from 'use-image'

const MapCharacter = ({config, data}) => {

    const [image] = useImage(Hunter)

    return (
        <Image
        image={image}
        height={config.scale}
        width={config.scale}
        x={50 * data.position_x}
        y={50 * data.position_y}

        />
    )
}

export default MapCharacter
