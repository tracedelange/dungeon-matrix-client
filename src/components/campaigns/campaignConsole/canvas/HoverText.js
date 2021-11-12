import React from 'react'
import { Text, Rect } from 'react-konva'

const HoverText = ({ x, y, content }) => {


    return (
        <>
            {/* <Rect
                x={x -75}
                y={y}
                width={200}
                height={50}
                fill="grey"
            /> */}
            <Text
                x={x - (content.length * 5)}
                y={y}
                text={content}
                fontSize={30}
                fontFamily='BedsteadRegular'
                fill='white'
            />
        </>

    )
}

export default HoverText
