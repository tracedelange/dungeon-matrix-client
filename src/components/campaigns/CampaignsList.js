import React from 'react'
import { useSelector } from 'react-redux'
import CampaignListItem from './CampaignListItem'

const CampaignsList = () => {

    const campaigns = useSelector(state => state.campaigns)
    const campaignArray = campaigns.map(item => <CampaignListItem data={item} key={item.id} />)

    return (
        <ul className='campaign-selection-list'>
            {campaignArray}
        </ul>
    )
}

export default CampaignsList
