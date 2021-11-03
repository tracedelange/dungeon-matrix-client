import { Paper } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router'
import {paperTransitionStyle} from '../../muiTheme'

const SelectionOptions = () => {


    const history = useHistory()



    return (
        <div className='homepage-options-container'>
            <Paper sx={paperTransitionStyle} elevation={4} className='homepage-paper-option'>
                <h3>My Campaigns</h3>
            </Paper>
            <Paper sx={paperTransitionStyle} elevation={4} className='homepage-paper-option'>
                <h3>My Characters</h3>
            </Paper>
            <Paper className='break'></Paper>
            <Paper sx={paperTransitionStyle} elevation={4} className='homepage-paper-option'>
                <h3>My Maps</h3>
            </Paper>
            <Paper sx={paperTransitionStyle} elevation={4} className='homepage-paper-option'>
                <h3>My Account</h3>
            </Paper>
        </div>
    )
}

export default SelectionOptions
