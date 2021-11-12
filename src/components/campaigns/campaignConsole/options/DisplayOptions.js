import React, { useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const DisplayOptions = () => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        open ?
            <>
                <ArrowUpwardIcon className='close-options' onClick={handleClick} />
                <div className='display-options-container'>

                </div>
            </>

            :

            <ArrowDownwardIcon className='open-options' onClick={handleClick} />

    )
}

export default DisplayOptions
