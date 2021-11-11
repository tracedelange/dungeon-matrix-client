import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@mui/material'
import { createCampaign } from '../../requests'
import { useDispatch } from 'react-redux'

const NewCampaignDialog = ({ open, handleClose }) => {

    const [campaignTitle, setCampaignTitle] = useState('')


    const dispatch = useDispatch()

    const handleCreateSubmit = () => {
        createCampaign(campaignTitle)
        .then(response => {
            if (response) {
                console.log(response)
                dispatch({type: 'ADD_NEW_CAMPAIGN', payload: response})
            }
        })
        setCampaignTitle('')
        handleClose()
    }




    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>New Campaign</DialogTitle>

            <DialogContent>
                <DialogContentText>
                    Time for a new Adventure!
                </DialogContentText>
                <br />
                <DialogContentText>
                    To start, choose a title for your campaign. Then you can invite players and choose a DM.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Campaign Title"
                    value={campaignTitle}
                    type="text"
                    fullWidth
                    onChange={(e)=> setCampaignTitle(e.target.value)}
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleCreateSubmit}>Create</Button>
            </DialogActions>



        </Dialog>
    )
}

export default NewCampaignDialog
