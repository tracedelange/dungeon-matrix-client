import React from 'react'
import { Image } from 'react-konva'
import useImage from 'use-image'
import { terrain } from '../../../../avatarIndex'
import {v4 as uuid} from 'uuid'

const TerrainLayer = ({ stage, config }) => {



    const [grassImage] = useImage(terrain[config.tile_index])


    const grassArray = []

    for (let x = 0; x < config.width; x++) {
        for (let y = 0; y < config.height; y++) {
            grassArray.push(
                <Image
                key={uuid()}
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
        {/* {grassArray} */}
        <Image 
        x={0}
        y={0}
        image={grassImage}
        width={config.width * config.scale}
        height={config.height * config.scale}
        />
        </>
    )
}

export default TerrainLayer
