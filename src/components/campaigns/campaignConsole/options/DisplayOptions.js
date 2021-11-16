import React, { useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {useSelector} from 'react-redux'
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

const DisplayOptions = () => {

    const [open, setOpen] = useState(false)

    const config = useSelector(state => state.grid.configuration)

    const handleClick = () => {
        setOpen(!open)
    }


    const dispatch = useDispatch()

    const handleGridClick = () => {
        dispatch({type: 'UPDATE_CONFIGURATION', payload: {gridVisible: !config.gridVisible}})
        
    }
    
    const handleDetailsClick = () => {
        dispatch({type: 'UPDATE_CONFIGURATION', payload: {characterDetails: !config.characterDetails}})
    }

    return (
        open ?
            <>
                <ArrowUpwardIcon className='close-options' onClick={handleClick} />
                <div className='display-options-container'>

                    <Button sx={{flexGrow: '2'}} onClick={handleGridClick} fullWidth variant='contained'>Grid Lines: {config.gridVisible ? "visible" : "hidden"}</Button>
                    <Button sx={{flexGrow: '2'}} onClick={handleDetailsClick} fullWidth variant='contained'>Character Details: {config.characterDetails ? "visible" : "hidden"}</Button>

                </div>
            </>

            :

            <ArrowDownwardIcon className='open-options' onClick={handleClick} />

    )
}

export default DisplayOptions
