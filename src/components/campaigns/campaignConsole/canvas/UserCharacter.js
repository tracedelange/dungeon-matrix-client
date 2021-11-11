import React, { useState, useRef, useEffect } from 'react'
import { Image } from 'react-konva'
import Eater from '../../../../assets/eater-200.png'
import useImage from 'use-image'
import HoverText from './HoverText'
import ranger from '../../../../assets/ranger.png'

const UserCharacter = ({ config, data, socket, map_character_id }) => {

    const [image] = useImage(ranger);


    const [position, setPosition] = useState({
        x: data.position_x,
        y: data.position_y
    })

    const [hoverActive, setHoverActive] = useState(false)



    const handleDragDrop = (e) => {

        let x = Math.floor((e.target.x()) / 50)
        let y = Math.floor((e.target.y()) / 50)

        if (x <= 0) {
            x = 0
        }
        if (y <= 0) {
            y = 0
        }
        if (x > config.width - 1) {
            x = config.width - 1
        } 
        if (y > config.height - 1) {
            y = config.height - 1
        }


        setPosition({
            x: x,
            y: y
        })

        //handle redux state update and send out message containing user movement.
        // console.log("new position: ")
        // console.log(x)
        // console.log(y)
        let newPosition = {
            map_character_id: map_character_id,
            position_x: x,
            position_y: y
        }
        socket.updateUserPosition(newPosition)


    }

    return (
        <>
        {hoverActive ?
        <HoverText x={50 * position.x} y={50 * (position.y - 1)} content={data.character.name} />
        :
        null}
        <Image
            image={image}
            height={config.scale}
            width={config.scale}

            onMouseEnter={e => {
                const container = e.target.getStage().container();
                container.style.cursor = "pointer";
                setHoverActive(true)
            }}
            onMouseLeave={e => {
                const container = e.target.getStage().container();
                container.style.cursor = "default";
                setHoverActive(false)
            }}

            x={50 * position.x}
            y={50 * position.y}

            draggable
            onDragEnd={handleDragDrop}
            _useStrictMode
        />
        </>
    )
}

export default UserCharacter
