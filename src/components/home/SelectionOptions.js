import { Paper } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router'
import {paperTransitionStyle} from '../../muiTheme'

const SelectionOptions = () => {


    const history = useHistory()

    const handleHomepageOptionClick = (e) => {
        console.log(e.target.id)
        history.push(`/${e.target.id}`)
    }


    return (
        <div className='homepage-options-container'>
            <Paper sx={paperTransitionStyle} elevation={4} className='homepage-paper-option' onClick={handleHomepageOptionClick} id='campaigns'>
                <h3 onClick={handleHomepageOptionClick} id='campaigns'>My Campaigns</h3>
            </Paper>
            <Paper sx={paperTransitionStyle} elevation={4} className='homepage-paper-option' onClick={handleHomepageOptionClick} id='characters'>
                <h3 onClick={handleHomepageOptionClick} id='characters'>My Characters</h3>
            </Paper>
            <Paper className='break'></Paper>
            <Paper sx={paperTransitionStyle} elevation={4} className='homepage-paper-option' onClick={handleHomepageOptionClick} id='maps'>
                <h3 onClick={handleHomepageOptionClick} id='maps'>My Maps</h3>
            </Paper>
            <Paper sx={paperTransitionStyle} elevation={4} className='homepage-paper-option' onClick={handleHomepageOptionClick} id='account'>
                <h3 onClick={handleHomepageOptionClick} id='account'>My Account</h3>
            </Paper>
        </div>
    )
}

export default SelectionOptions
