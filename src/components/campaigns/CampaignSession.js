import React, { useState, useEffect } from 'react'
import { getCampaignData } from '../../requests'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import SocketLayer from './campaignConsole/SocketLayer'

const CampaignSession = () => {

    const campaignData = useSelector(state => state.campaigns.selectedCampaign)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        getCampaignData(id)
            .then(data => {
                if (data) {
                    dispatch({ type: 'SET_MESSAGES', payload: data.chat_messages})
                    delete data.chat_messages
                    dispatch({ type: 'SET_SELECTED_CAMPAIGN', payload: data })
                }
            })
    }, [])

    return (
        <>
            {campaignData ?
                <SocketLayer />
                :
                null
                // add a loading spinner and time out here eventually?
            }
        </>
    )
}

export default CampaignSession
