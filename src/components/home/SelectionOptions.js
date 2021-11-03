import { Paper } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router'
import {paperTransitionStyle} from '../../muiTheme'

const SelectionOptions = () => {


    const history = useHistory()

    const handleHomepageOptionClick = () => {
        console.log(e.target.id)
    }


    return (
        <div className='homepage-options-container'>
            <Paper sx={paperTransitionStyle} elevation={4} className='homepage-paper-option' onClick={handleHomepageOptionClick} id='campaigns'>
                <h3>My Campaigns</h3>
            </Paper>
            <Paper sx={paperTransitionStyle} elevation={4} className='homepage-paper-option' onClick={handleHomepageOptionClick} id='characters'>
                <h3>My Characters</h3>
            </Paper>
            <Paper className='break'></Paper>
            <Paper sx={paperTransitionStyle} elevation={4} className='homepage-paper-option' onClick={handleHomepageOptionClick} id='maps'>
                <h3>My Maps</h3>
            </Paper>
            <Paper sx={paperTransitionStyle} elevation={4} className='homepage-paper-option' onClick={handleHomepageOptionClick} id='account'>
                <h3>My Account</h3>
            </Paper>
        </div>
    )
}

export default SelectionOptions
