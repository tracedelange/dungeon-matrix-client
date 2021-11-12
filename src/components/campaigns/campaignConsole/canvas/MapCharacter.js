import React, { useState } from 'react'
import { Image } from 'react-konva'
import Hunter from '../../../../assets/hunter-200.png'
import useImage from 'use-image'
import HoverText from './HoverText'
import { useSelector } from 'react-redux'
import { Sprite } from 'react-konva'
import warrior from '../../../../assets/warrior-spritesheet.png'

const MapCharacter = ({ config, data }) => {

    const [image] = useImage(warrior)
    const [hoverActive, setHoverActive] = useState(false)


    return (
        <>
            {hoverActive ?

                <HoverText x={50 * data.position_x} y={50 * (data.position_y-1)} content={data.character.name} />
                :
                null
            }
            <Image
                image={image}
                height={config.scale}
                width={config.scale}
                x={50 * data.position_x}
                y={50 * data.position_y}

                onMouseOver={() => {
                    setHoverActive(true)
                }}
                onMouseLeave={() => {
                    setHoverActive(false)
                }}

            />
        </>
    )
}

export default MapCharacter
