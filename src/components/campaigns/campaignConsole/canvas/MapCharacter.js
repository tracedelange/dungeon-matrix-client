import React, { useState } from 'react'
import { Group, Image } from 'react-konva'
import useImage from 'use-image'
import HoverText from './HoverText'
import { avatars } from '../../../../avatarIndex'
import CanvasHealthbar from './CanvasHealthbar'

const MapCharacter = ({ config, data }) => {

    const [image] = useImage(avatars[data.character.avatar_index])
    const [hoverActive, setHoverActive] = useState(false)

    return (
        <>
            <Group
                x={50 * data.position_x}
                y={50 * data.position_y}

                onMouseOver={() => {
                    setHoverActive(true)
                }}
                onMouseLeave={() => {
                    setHoverActive(false)
                }}
            >
                {hoverActive ?
                    <>
                    <CanvasHealthbar health={data.character.health} maxHealth={data.character.maxHealth} />
                    <HoverText x={0} y={-1 * config.scale} content={data.character.name} />
                    </>
                    :
                    config.characterDetails ?
                        <>
                        <CanvasHealthbar health={data.character.health} maxHealth={data.character.maxHealth} />
                        <HoverText x={0} y={-1 * config.scale} content={data.character.name} />
                        </>
                        :
                        null
                }
                <Image
                    image={image}
                    height={config.scale}
                    width={config.scale}
                />

            </Group>
        </>
    )
}

export default MapCharacter
