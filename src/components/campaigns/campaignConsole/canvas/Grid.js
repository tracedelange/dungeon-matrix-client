import React, { useState, useEffect } from 'react'
import { Image, Line, Rect } from 'react-konva'
import { useSelector } from 'react-redux'

const Grid = ({ config }) => {

    let columns = config.width
    let rows = config.height

    let height = config.scale * config.height
    let width = config.scale * config.width

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
        {verticalLines}
        {horizontalLines}
        </>
    )
}

export default Grid
