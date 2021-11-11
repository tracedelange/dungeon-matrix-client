import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CircularProgress, Divider } from '@mui/material'
import { getCampaignData } from '../../requests'
import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import LoopIcon from '@mui/icons-material/Loop';
import { addUserToCampaign, removeUserFromCampaign } from '../../requests'
import { useSelector } from 'react-redux'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const CampaignDetailsPage = () => {


    const { id } = useParams()

    const authedUser = useSelector(state => state.session)
    const [campaignData, setCampaignData] = useState()
    const [campaignUsersArray, setCampaignUsersArray] = useState([])

    const [newUser, setNewUser] = useState('')
    const [adding, setAdding] = useState({
        inProgress: false,
        success: false,
    })

    const [loaded, setLoaded] = useState(false)





    useEffect(() => {
        getCampaignData(id)
            .then(data => {
                console.log(data)
                if (data) {

                    setCampaignData(data)
                    setCampaignUsersArray(data.users.map((item) => {
                        return (
                            <li className='campaignUsersArrayItem' key={item.id} >
                                {item.username}
                                {item.id === data.dm_id ? ' - dm' : null}
                                {item.id !== authedUser.id ? <HighlightOffIcon onClick={() => handleRemoveUserClick(item.id, data.id)} /> : null}
                            </li>
                        )
                    }))
                    setLoaded(true)

                }
            })
    }, [])

    const handleRemoveUserClick = (userID, campaignID) => {
        //add a dialog box to ask if the user is sure
        // console.log(userID)
        // console.log(campaignID)

        console.log('clicked')
        removeUserFromCampaign(userID, campaignID)
        setCampaignUsersArray(campaignUsersArray.filter(item => item.key !== userID))



    }

    const handleAddUserClick = (e) => {

        setAdding({ ...adding, inProgress: true })
        e.preventDefault()
        addUserToCampaign(newUser, campaignData.id)
            .then(data => {
                if (!data.error) {
                    setAdding({ inProgress: false, success: true })
                    setCampaignUsersArray(data.map((item) => {
                        return (
                            <li className='campaignUsersArrayItem' key={item.id} >
                                {item.username}
                                {item.id === data.dm_id ? ' - dm' : null}
                                {item.id !== authedUser.id ? <HighlightOffIcon onClick={() => handleRemoveUserClick(item.id, data.id)} /> : null}
                            </li>
                        )
                    }))

                } else {
                    setAdding({ inProgress: false, success: false })
                }
            })
        setNewUser('')

    }
    const handleInputChange = (e) => {
        setNewUser(e.target.value.replace(' ', '').toLowerCase())
    }


    return (

        loaded ?
            <div className='campaign-details'>
                <h2>{campaignData.title} Config</h2>
                <div className='campaign-details-container'>
                    <div className='campaign-details-sub'>
                        <h3>Members</h3>
                        <Divider flexItem variant='middle' />
                        <div className='campaign-members-container'>
                            <ul className='campaign-members-list'>
                                {campaignUsersArray}
                            </ul>
                            <form onSubmit={handleAddUserClick} className='campaign-add-user-container'>
                                <TextField
                                    label='Add User'
                                    fullWidth
                                    value={newUser}
                                    onChange={handleInputChange}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">

                                                {/* 
                                                {adding.inProgress ?

                                                    <CircularProgress />
                                                    :
                                                    null
                                                    // <CircularProgress variant='determinate' value={0} />
                                                }
                                                {!adding.inProgress && adding.success ? 
                                                    <CheckIcon />
                                                :
                                                    <ClearIcon />  
                                                } 
                                                 */}
                                            </InputAdornment>
                                        ),
                                    }} />
                                <Button variant='contained' type='submit'>submit</Button>
                            </form>

                        </div>
                    </div>
                    <Divider orientation='vertical' flexItem variant='middle' />
                    <div className='campaign-details-sub'>
                        <h3>Settings</h3>
                        <Divider flexItem variant='middle' />

                    </div>
                    {/* <Divider orientation='vertical' flexItem variant='middle' />
            <div className='campaign-details-sub'>
            </div> */}

                </div>
            </div>
            :
            null
    )
}

export default CampaignDetailsPage
