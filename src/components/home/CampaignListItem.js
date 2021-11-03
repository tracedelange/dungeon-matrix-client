import React from 'react'

const CampaignListItem = ({data}) => {
    return (
        <li className='campaign-list-item'>
            {data.title}
        </li>
    )
}

export default CampaignListItem
