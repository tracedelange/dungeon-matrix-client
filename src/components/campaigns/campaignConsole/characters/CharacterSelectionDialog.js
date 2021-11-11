import React, {useState} from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@mui/material'
import { useHistory } from 'react-router-dom'
import CharacterSelectionItem from './CharacterSelectionItem'

const CharacterSelectionDialog = ({handleClose, open, characters, spawnCharacter}) => {

    console.log(characters)

    const history = useHistory()

    const handleNoCharactersClick = () => {
        history.push("/characters")
    }



    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Select a Character to Spawn"}
            </DialogTitle>
            <DialogActions>
                {characters.length > 0 ?
            <div className='character-spawn-selection-container'>
                {characters.map(item => <CharacterSelectionItem handleClose={handleClose} spawnCharacter={spawnCharacter} data={item} key={item.id} />)}
            </div>
            :
            <div className='no-characters-container'>
                <p>Looks like you don't have any characters associated with your account. Click below to create a character</p>
                <Button variant='contained' onClick={handleNoCharactersClick}>Create Character</Button>
            </div>
            }
            </DialogActions>
        </Dialog>
    )
}

export default CharacterSelectionDialog

