import React, { useState, useEffect } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { mobs, terrain } from '../../../../avatarIndex'
import { v4 as uuid } from 'uuid'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@mui/material';


const DMConsole = ({ socket }) => {

    const [open, setOpen] = useState(false)

    const [selectedItem, setSelectedItem] = useState(null)

    const dispatch = useDispatch()

    const dmTools = useSelector(state => state.grid.dmTools)


    useEffect(() => {
        if (open) {
            dispatch({ type: 'SET_DM_TOOLS_ACTIVE', payload: true })
        } else {
            dispatch({ type: 'SET_DM_TOOLS_ACTIVE', payload: false })
        }
    }, [open])

    return (
        <>
            {open ?
                <>
                    <ArrowDownwardIcon onClick={() => setOpen(!open)} className='dm-toolbox-close' />
                    <div className='dm-toolbox-container'>

                        <div className='scene-generator-container'>
                            <Button disabled={true}>Desert</Button>
                            <Button disabled={true}>Cave</Button>
                            <Button disabled={true}>Grove</Button>
                            <div className='break'></div>
                            <Button id='desert' onClick={(e) => socket.generateMap({ type: e.target.id })}>Desert</Button>
                            <Button id='forest' onClick={(e) => socket.generateMap({ type: e.target.id })}>Forest</Button>
                            <Button onClick={() => socket.clearMap()}>Clear</Button>
                        </div>

                        <div className='canvas-element-container'>
                            {mobs.map((item, index) => {
                                return (
                                    <img
                                        key={uuid()}
                                        onClick={() => dispatch({ type: 'SET_SELECTED_ITEM', payload: index })}
                                        className={dmTools.selectedItem === index ? 'dm-toolbox-image dm-toolbox-image-selected' : 'dm-toolbox-image'} src={item}
                                    />
                                )
                            }
                            )}
                        </div>


                    </div>
                </>
                :
                <ArrowUpwardIcon onClick={() => setOpen(!open)} className='dm-toolbox-open' />
            }
        </>
    )
}

export default DMConsole
