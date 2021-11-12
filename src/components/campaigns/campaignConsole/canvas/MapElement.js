import React from 'react'
import useImage from 'use-image'
import { Image } from 'react-konva'
import { mobs } from '../../../../avatarIndex'

const MapElement = ({ data, config }) => {

    const [image] = useImage(mobs[data.avatar_index])

    return (
        <Image
        image={image}
        width={config.width * 2}
        height={config.height * 2}
        x={data.position_x * 50}
        y={data.position_y * 50}        

        />
    )
}

export default MapElement
