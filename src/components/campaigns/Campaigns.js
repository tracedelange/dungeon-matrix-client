import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCampaigns } from '../../requests'
import CampaignsList from './CampaignsList'

const Campaigns = () => {

    const dispatch = useDispatch()
    const [campaignsLoaded, setCampaignsLoaded] = useState(false)
    const campaigns = useSelector(state => state.campaigns)

    useEffect(() => {
        getCampaigns()
            .then(data => {
                dispatch({ type: "SET_CAMPAIGNS", payload: data })
                setCampaignsLoaded(true)
            })
    }, [])


    return (
        <>
            {campaignsLoaded ?
                <CampaignsList />
                :
                null
            }
        </>
    )
}

export default Campaigns
