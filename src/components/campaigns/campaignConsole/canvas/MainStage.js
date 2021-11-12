import React, { useState } from 'react'
import Grid from './Grid';
import { Stage, Layer, Rect, Circle, Line } from 'react-konva';
import UserCharacter from './UserCharacter'
import { useSelector } from 'react-redux';
import MapCharacter from './MapCharacter';
import TerrainLayer from './TerrainLayer';
import MapElement from './MapElement';


const MainStage = ({ socket }) => {

    
    const map = useSelector(state => state.grid)
    const user = useSelector(state => state.session)
    
    const [stage, setStage] = useState({
        scale: 1,
        // x: 50 * (map.configuration.width / 8),
        x: 50 * (map.configuration.width / 4),
        y: -25 * (map.configuration.height / 2)
    })


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

    const mapElementArray = map.map_elements.map(item => {
        return <MapElement config={map.configuration} data={item} key={item.id} />
    })



    const mapCharacterArray = map.map_characters.map(item => {

        if (user.id !== item.user_id) {
            return <MapCharacter data={item} key={item.id} config={map.configuration} />
        } else {
            return <UserCharacter mapCharacters={map.map_characters} key={item.id} map_character_id={item.id} data={item} socket={socket} config={map.configuration} />
        }

    })


    const handleStageClick = (e) => {


        
        if (map.dmTools.active){
            //spawn characte at clicked location.
            let x = Math.floor((e.target.x()) / 50)
            let y = Math.floor((e.target.y()) / 50)
    
            if (x <= 0) {
                x = 0
            }
            if (y <= 0) {
                y = 0
            }
            if (x > map.configuration.width - 1) {
                x = map.configuration.width - 1
            }
            if (y > map.configuration.height - 1) {
                y = map.configuration.height - 1
            }
    

            let elementObject = {avatar_index: map.dmTools.selectedItem, position_x: x, position_y: y}

            console.log(elementObject)

            socket.spawnElement(elementObject)

        }
    }
    const handleMouseOver = () => {
        // console.log(e)
    }

    return (
        <Stage
            onWheel={handleWheel}
            onClick={handleStageClick}
            onMouseOver={handleMouseOver}
            width={window.innerWidth}
            height={window.innerHeight - 99}
            scaleX={stage.scale}
            scaleY={stage.scale}
            draggable
            x={stage.x}
            y={stage.y}
        >
            <Layer>
                <TerrainLayer stage={stage} config={map.configuration} />
            </Layer>
            <Layer>
                {mapElementArray}
            </Layer>
            <Layer>
                {map.configuration.gridVisible ?
                    <Grid config={map.configuration} />
                    :
                    null
                }
            </Layer>
            <Layer>
                {mapCharacterArray}
            </Layer>
        </Stage>
    )
}

export default MainStage
