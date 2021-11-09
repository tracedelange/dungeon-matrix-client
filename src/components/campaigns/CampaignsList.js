import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CampaignListItem from './CampaignListItem'
import NewCampaignDialog from './NewCampaignDialog'

const CampaignsList = () => {

    const campaigns = useSelector(state => state.campaigns.campaignList)
    const campaignArray = campaigns.map(item => <CampaignListItem data={item} key={item.id} />)

    const [newCampaignDialogOpen, setNewCampaignDialogOpen] = useState(false)
    console.log(campaigns)

    return (
        <>
            <div className='campaigns-header'>
                <h2 className='options-header'>Your Campaigns</h2>
                <Button onClick={() => setNewCampaignDialogOpen(true)} variant='contained'>New Campaign</Button>
                <NewCampaignDialog handleClose={() => setNewCampaignDialogOpen(false)} open={newCampaignDialogOpen} />
            </div>
            <ul className='campaign-selection-list'>
                {campaignArray}
            </ul>
        </>
    )
}

export default CampaignsList
