import React from 'react'
import { Rect } from 'react-konva'

const CanvasHealthbar = ({maxHealth, health}) => {


    let greenWidth = Math.floor( (health / maxHealth) * 100 )

    return (
        <>
        <Rect
        width={100}
        height={15}
        x={-25}
        y={-20}
        fill="red"
        />

        <Rect
        width={greenWidth}
        height={15}
        x={-25}
        y={-20}
        fill="#7DDE92"
         />

         </>
    )
}

export default CanvasHealthbar
