import React from 'react'
import { Rect } from 'react-konva'

const CursorHover = ({hoverCell, config}) => {

    // console.log(hoverCell)
    return (
        <Rect
        width={config.scale}
        height={config.scale}
        x={hoverCell.x * config.scale}
        y={hoverCell.y * config.scale}
        fill={'#A5E6BA'}
        
        
        />
    )
}

export default CursorHover
