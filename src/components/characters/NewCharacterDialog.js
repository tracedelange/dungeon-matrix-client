import React, {useState, useEffect} from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, TextField } from '@mui/material';
import { avatars } from '../../avatarIndex';

const NewCharacterDialog = ({ open, handleClose, handleNewCharacterSubmit }) => {


    const [newCharacter, setNewCharacter] = useState({
        name: '',
        avatar_index: null,
        health: 10
    })

    const [readyToSubmit, setReadyToSubmit] = useState(false)

    const handleInputChange = (e) => {
        setNewCharacter({
            ...newCharacter,
            name: e.target.value,
            health: 10
        })

    }

    const handleHealthInputChange = (e) => {

        let number = Math.abs(parseInt(e.target.value))
        if (number == NaN){
            let number = 1
            setNewCharacter({
                ...newCharacter,
                health: number
            })
        } else {
            setNewCharacter({
                ...newCharacter,
                health: number
            })
        }

    }

    const handleAvatarClick = (e) => {
        setNewCharacter({
            ...newCharacter,
            avatar_index: parseInt(e.target.id)
        })
    }

    useEffect(()=>{

        if (newCharacter.name !== '' && newCharacter.avatar_index !== null){
            setReadyToSubmit(true)
        } else {
            setReadyToSubmit(false)
        }

    },[newCharacter])


    console.log(newCharacter)

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="md"
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Create a new character"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Create your avatar! This is what we have at the moment for characters. Room for growth :)

                    <br/>
                    <br/>
                    You can change this stuff later, i.e. level up = more max hp
                    <br/>
                    <br/>
                </DialogContentText>
                <TextField onChange={handleInputChange} autoFocus label='Character Name' value={newCharacter.name} fullWidth/>
                <DialogContentText id="alert-dialog-description">
                    <br/>
                </DialogContentText>
                <TextField onChange={handleHealthInputChange} label='Hit Points' type='number' value={newCharacter.health} />
                <ul className='avatar-selection-list'>
                    {avatars.map((item, index) => {
                        return (
                            <li key={index}>
                                <img
                                id={index}
                                className={index === newCharacter.avatar_index ? 'avatar-selection-list-item chosen-avatar' : 'avatar-selection-list-item' }
                                onClick={handleAvatarClick}
                                src={item} />
                            </li>
                        )
                    } )}
                    
                </ul>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                disabled={!readyToSubmit}
                onClick={()=>{
                    setNewCharacter({
                        name: '',
                        avatar_index: null,
                        health: 10
                    })
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
