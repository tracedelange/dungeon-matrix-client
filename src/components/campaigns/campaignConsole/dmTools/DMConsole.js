import React, { useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {mobs, terrain} from '../../../../avatarIndex'

const DMConsole = () => {

    const [open, setOpen] = useState(false)


    return (
        <>
            {open ?
                <>
                    <ArrowDownwardIcon onClick={() => setOpen(!open)} className='dm-toolbox-close' />
                    <div className='dm-toolbox-container'>

                        <div className='canvas-element-container'>
                            {mobs.map(item => {
                                return (
                                    <img className='dm-toolbox-image' src={item} />
                                )
                            })}
                            {terrain.map(item => {
                                return (
                                    <img className='dm-toolbox-image' src={item} />
                                )
                            })}
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
