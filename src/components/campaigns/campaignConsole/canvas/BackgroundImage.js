import React from 'react'
import { Image } from 'react-konva'
import useImage from 'use-image'
import background from '../../../../assets/background.png'


const BackgroundImage = ({stageScale}) => {
    
    const [image] = useImage(background)

    console.log(stageScale)

    return (
        <Image
        // image={image}
        // width={window.innerWidth / stageScale.scale}
        // height={window.innerHeight / stageScale.scale}
        // x={-(stageScale.x) * 3.3}
        // y={-(stageScale.y* 3.3)}
        // offsetX={0}
        // offsetY={0}
        
        />

    )
}

export default BackgroundImage
