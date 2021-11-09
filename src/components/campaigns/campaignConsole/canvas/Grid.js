import React, { useState, useEffect } from 'react'
import { Line, Rect } from 'react-konva'



const Grid = ({ scale }) => {

    let columns = scale
    let rows = scale / 2

    
    let height = scale * 25
    let width = scale * 50

    let verticalLines = []
    let horizontalLines = []

    for (let x = -1; x < rows; x++) {
        verticalLines.push(
            <Line
                key={x}
                points={[0, 0 + ((height/rows) * (x+1)), width, 0 + ((height/rows) * (x+1))]}
                stroke="black"
                strokeWidth={1}

            />
        )
    }
    for (let y = -1; y < columns; y++) {
        horizontalLines.push(
            <Line
                key={y}
                points={[0 + ((width/columns) * (y+1)), 0, 0 + ((width/columns) * (y+1)), height]}
                stroke="black"
                strokeWidth={1}
    
            />
        )
    }




    return (
        <>
        <Rect x={0} y={0} width={width} height={height} fill="white" />
        {verticalLines}
        {horizontalLines}
        </>
    )
}

export default Grid
