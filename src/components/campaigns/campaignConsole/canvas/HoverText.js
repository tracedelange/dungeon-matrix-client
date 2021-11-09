import React from 'react'
import { Text } from 'react-konva'

const HoverText = ({x, y, content}) => {
    return (
        <Text
            x={x}
            y={y}
            text={content}
            fontSize={50}
            fontFamily='Calibri'
            fill='blue'
        />
    )
}

export default HoverText
