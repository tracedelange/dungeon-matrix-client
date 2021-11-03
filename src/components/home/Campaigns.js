import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCampaigns } from '../../requests'
import CampaignsList from './CampaignsList'

const Campaigns = () => {

    const dispatch = useDispatch()
    const campaigns = useSelector(state => state.campaigns)

    useEffect(() => {
        getCampaigns()
            .then(data => {
                dispatch({ type: "SET_CAMPAIGNS", payload: data })
            })
    }, [])

    

    return (
        <>
            <CampaignsList />
        </>
    )
}

export default Campaigns
