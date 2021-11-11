import React, {useState} from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, TextField } from '@mui/material';

const NewCharacterDialog = ({ open, handleClose, handleNewCharacterSubmit }) => {


    const [newCharacter, setNewCharacter] = useState('')

    const handleInputChange = (e) => {
        setNewCharacter(e.target.value)
    }

    console.log(newCharacter)

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Create a new character"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Okay I'll level with you. Characters are pretty barebones at the moment, but there's potential for some major expansion in the future. For now, just enter a name for your character.
                </DialogContentText>
                <br/>
                <TextField onChange={handleInputChange} autoFocus label='Character Name' value={newCharacter} fullWidth/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={()=>{
                    setNewCharacter('')
                    handleClose()
                    handleNewCharacterSubmit(newCharacter)
                }} >
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default NewCharacterDialog
