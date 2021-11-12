import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Divider } from '@mui/material'
import CharacterSidebarEntry from './CharacterSidebarEntry'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBack from '@mui/icons-material/ArrowBack';


const CharacterContainer = ({ socket }) => {

    const user = useSelector(state => state.session)
    const campaignDetails = useSelector(state => state.campaigns.selectedCampaign)
    const [open, setOpen] = useState(false)

    // console.log(user)
    // console.log(campaignDetails)

    const handleClick = (e) => {
        setOpen(!open)
    }


    return (
        <>
            {open ?
                <div className='character-container-container'>


                    <ArrowForwardIcon onClick={handleClick} className='character-hide-icon' />

                    <div className='character-container'>
                        <h2>Characters</h2>
                        <Divider flexItem />
                        <div className='canvas-character-display-container'>
                            {campaignDetails.users.map(user => <CharacterSidebarEntry socket={socket} data={user} key={user.id} />)}
                        </div>
                    </div>
                </div>
                :
                <ArrowBack className='character-open-icon' onClick={handleClick} />
            
            }
        </>
    )
}

export default CharacterContainer
