import React from 'react'
import { useSelector } from 'react-redux'
import { Divider } from '@mui/material'
import CharacterSidebarEntry from './CharacterSidebarEntry'

const CharacterContainer = ({socket}) => {

    const user = useSelector(state => state.session)
    const campaignDetails = useSelector(state => state.campaigns.selectedCampaign)


    console.log(user)
    console.log(campaignDetails)


    
    return (    
        <div className='character-container-container'>
            <div className='character-container'>
                <h2>Characters</h2>
                <Divider flexItem />
                <div className='canvas-character-display-container'>
                    {campaignDetails.users.map(user => <CharacterSidebarEntry socket={socket} data={user} key={user.id} />)}
                </div>
            </div>
        </div>
    )
}

export default CharacterContainer
