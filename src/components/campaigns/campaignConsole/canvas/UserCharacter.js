import React, { useState, useRef } from 'react'
import { Image } from 'react-konva'
import Eater from '../../../../assets/eater-200.png'
import useImage from 'use-image'

const UserCharacter = ({ scale }) => {

    const shapeRef = useRef()

    const [image] = useImage(Eater);

    const [active, setActive] = useState(false)
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })


    



    const [characterStats, setCharacterState] = useState({
        speed: 10
    })




    console.log(active)


    return (
        <Image
            image={image}
            height={scale / 2}
            width={scale / 2}

            x={50 * position.x}
            y={50 * position.y}

            onClick={()=>setActive(true)}

        />
    )
}

export default UserCharacter
