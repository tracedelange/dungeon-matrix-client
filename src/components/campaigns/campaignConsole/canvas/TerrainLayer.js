import React from 'react'
import { Image } from 'react-konva'
import useImage from 'use-image'
import { grasses } from '../../../../avatarIndex'

const TerrainLayer = ({ stage, config }) => {

    // console.log(stage)
    // console.log(config)

    const [grassImage] = useImage(grasses[0])

    const grassArray = []

    for (let x = 0; x < config.width; x++) {
        for (let y = 0; y < config.height; y++) {
            grassArray.push(
                <Image
                image={grassImage}
                height={config.scale}
                width={config.scale}
                x={config.scale * x}
                y={config.scale * y}
                />)
        }
    }


    return (
        <>
        {grassArray}
        </>
    )
}

export default TerrainLayer
