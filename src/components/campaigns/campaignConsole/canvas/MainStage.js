import React, { useState } from 'react'
import Grid from './Grid';
import { Stage, Layer, Rect, Circle, Line } from 'react-konva';
import UserCharacter from './UserCharacter'
import { useSelector } from 'react-redux';
import MapCharacter from './MapCharacter';
import TerrainLayer from './TerrainLayer';
import MapElement from './MapElement';
import BackgroundImage from './BackgroundImage'
import CursorHover from './CursorHover';


const MainStage = ({ socket }) => {


    const map = useSelector(state => state.grid)
    const user = useSelector(state => state.session)

    const [hoverCell, setHoverCell] = useState({x: 1000, y: 1000})

    const [stage, setStage] = useState({
        scale: 1,
        x: 50 * (map.configuration.width / 4),
        y: -25 * (map.configuration.height / 2)
    })

    const cleanPos = (x,y) => {

        let cleanX = Math.floor(x / map.configuration.scale)
        let cleanY = Math.floor(y / map.configuration.scale)

        if (cleanX > map.configuration.width - 1) {
            cleanX = map.configuration.width - 1
        }
        if (cleanY > map.configuration.height - 1) {
            cleanY = map.configuration.height - 1
        }
        if (cleanY < 0) {
            cleanY = 0
        }
        if (cleanX < 0) {
            cleanX = 0
        }

        return {cleanX, cleanY}
        
    }

    const handleMouseMove = (e) => {

        if (e.target.parent) {

            let x = e.target.parent.x() / map.configuration.scale
            let y = e.target.parent.y() / map.configuration.scale

            setHoverCell({x: x, y: y})

        } else {
            let x = Math.floor((e.target.getRelativePointerPosition().x) / map.configuration.scale)
            let y = Math.floor((e.target.getRelativePointerPosition().y) / map.configuration.scale)
            
            if (x > map.configuration.width - 1) {
                x = map.configuration.width - 1
            }
            if (y > map.configuration.height - 1) {
                y = map.configuration.height - 1
            }
            if (y < 0) {
                y = 0
            }
            if (x < 0) {
                x = 0
            }
            
            setHoverCell({x: x, y: y})

            // setStage({
            //     ...stage,
            //     hoverCell: {x: x, y: y}
            // })
        }

    }
    
    const handleWheel = (e) => {
        e.evt.preventDefault();

        const scaleBy = 1.05;
        const renderStage = e.target.getStage();
        const oldScale = renderStage.scaleX();
        const mousePointTo = {
            x: renderStage.getPointerPosition().x / oldScale - renderStage.x() / oldScale,
            y: renderStage.getPointerPosition().y / oldScale - renderStage.y() / oldScale
        };

        const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;

        setStage({
            ...stage,
            scale: newScale,
            x: (renderStage.getPointerPosition().x / newScale - mousePointTo.x) * newScale,
            y: (renderStage.getPointerPosition().y / newScale - mousePointTo.y) * newScale
        });
    };

    const mapElementArray = map.map_elements.map(item => {
        return <MapElement config={map.configuration} data={item} key={item.id} />
    })


    const handleCharacterDragHighlight = (e) => {

        let clean = cleanPos(e.target.x(), e.target.y())
        // setHoverCell({
        //     x: clean.cleanX,
        //     y: clean.cleanY
        // })

    }

    const mapCharacterArray = map.map_characters.map(item => {

        if (user.id !== item.user_id) {
            return <MapCharacter data={item} key={item.id} config={map.configuration} />
        } else {
            return <UserCharacter updateGridHighlight={handleCharacterDragHighlight} mapCharacters={map.map_characters} key={item.id} map_character_id={item.id} data={item} socket={socket} config={map.configuration} />
        }

    })


    const handleStageClick = (e) => {        

        if (map.dmTools.active) {
            //spawn characte at clicked location.
            let x = Math.floor((e.target.getRelativePointerPosition().x) / map.configuration.scale)
            let y = Math.floor((e.target.getRelativePointerPosition().y) / map.configuration.scale)



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


            let elementObject = { avatar_index: map.dmTools.selectedItem, position_x: x, position_y: y }

            socket.spawnElement(elementObject)
        }
    }
    const handleMouseOver = () => {
        console.log('mouse is currently over')
    }
    const handleMouseLeave = () => {
        console.log('mouse has left the party')
    }

    const updateHoverLocation = (e) => {

        console.log(e)

    }

    return (
        <>
            <Stage
                width={window.innerWidth}
                height={window.innerHeight}
                x={0}
                y={0}
                className='background-stage'
                listening={false}
            >
                <Layer
                listening={false}>
                    <BackgroundImage config={map.configuration} />
                </Layer>
            </Stage>
            <Stage
                onWheel={handleWheel}
                onClick={handleStageClick}
                // onMouseMove={handleMouseMove}
                // onMouseEnter={handleMouseOver}
                // onMouseLeave={handleMouseLeave}
                width={window.innerWidth}
                height={window.innerHeight - 99}
                scaleX={stage.scale}
                scaleY={stage.scale}
                draggable
                x={stage.x}
                y={stage.y}
            >
                <Layer
                listening={false}
                >
                    <TerrainLayer stage={stage} config={map.configuration} />
                </Layer>
                <Layer>
                    {mapElementArray}
                </Layer>
                {/* <Layer>
                    <CursorHover hoverCell={hoverCell} config={map.configuration} />
                </Layer> */}
                <Layer
                id='grid'
                >
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
        </>
    )
}

export default MainStage
