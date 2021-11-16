import React from 'react'
import { getAge } from '../../globals'
import { Divider, Button } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { getCampaignData } from '../../requests'
import { useDispatch, useSelector } from 'react-redux'

const CampaignListItem = ({ data }) => {

    const history = useHistory()
    const dispatch = useDispatch()

    let dm = data.users.find(item => item.id === data.dm_id)
    let user = useSelector(state => state.session)

    const handleCampaignItemClick = () => {
        history.push(`/campaigns/${data.id}`)
    }
    const handleCampaignDetailsClick = () => {
        history.push(`/campaigns/config/${data.id}`)
    }


    console.log(data)


    return (
        <li className='campaign-list-item'>

            <div className='campaign-title'>
                <p>
                    {data.title}
                </p>
                <p>
                    Created {getAge(data.created_at)}
                </p>
                <Button onClick={handleCampaignItemClick} variant='contained'>Join Session</Button>
            </div>
            <Divider variant='middle' orientation='vertical' flexItem />
            <div className='campaign-details' >
                <p>
                    {data.users.length} Members
                </p>
                <p>
                    Dungeon Master:  {dm.username}
                </p>
                {data.is_dm ?
                    <Button variant='contained' onClick={handleCampaignDetailsClick}>Manage Campaign</Button>
                    :
                    null
                }

            </div>
        </li>
    )
}

export default CampaignListItem
