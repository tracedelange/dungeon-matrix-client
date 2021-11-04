import React from 'react'
import { getAge } from '../../globals'
import { Divider } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { getCampaignData } from '../../requests'
import { useDispatch } from 'react-redux'

const CampaignListItem = ({ data }) => {

    const history = useHistory()
    const dispatch = useDispatch()
    
    let dm = data.users.find(item => item.id === data.dm_id)

    const handleCampaignItemClick = () => {
        history.push(`/campaigns/${data.id}`)

    }

    return (
        <li className='campaign-list-item' onClick={handleCampaignItemClick}>

            <div className='campaign-title'>
                <p>
                    {data.title}
                </p>
                <p>
                    Created {getAge(data.created_at)}
                </p>
            </div>
            <Divider variant='middle' orientation='vertical' flexItem />
            <div className='campaign-details'>
                <p>
                    {data.users.length} Members, 0 / {data.users.length} Online
                </p>
                <p>
                    Dungeon Master:  {dm.username}
                </p>
            </div>
        </li>
    )
}

export default CampaignListItem