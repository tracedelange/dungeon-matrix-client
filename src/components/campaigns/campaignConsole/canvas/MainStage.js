import React, {useState} from 'react'
import Grid from './Grid';
import { Stage, Layer, Rect, Circle, Line } from 'react-konva';
import UserCharacter from './UserCharacter'
import { useSelector } from 'react-redux';


const MainStage = ({ socket }) => {

    const [stage, setStage] = useState({
        scale: .5,
        x: 50,
        y: 50
    })

    const map = useSelector(state => state.grid)



    const cellSize = 100

    const handleWheel = (e) => {
        e.evt.preventDefault();
    
        const scaleBy = 1.05;
        const stage = e.target.getStage();
        const oldScale = stage.scaleX();
        const mousePointTo = {
          x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
          y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
        };
    
        const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;
    
        setStage({
          scale: newScale,
          x: (stage.getPointerPosition().x / newScale - mousePointTo.x) * newScale,
          y: (stage.getPointerPosition().y / newScale - mousePointTo.y) * newScale
        });
      };



    return (
        <Stage
        onWheel={handleWheel}
        width={window.innerWidth}
        height={window.innerHeight - 99}
        scaleX={stage.scale}
        scaleY={stage.scale}
        draggable
        x={stage.x}
        y={stage.y}


        >
            <Layer>
                <Grid config={map.configuration} />
            </Layer>
            <Layer>
                <UserCharacter config={map.configuration}/>
            </Layer>
        </Stage>
    )
}

export default MainStage
