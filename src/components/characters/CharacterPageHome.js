import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import { getCharacters, createCharacter, deleteCharacter } from '../../requests'
import CharacterListItem from './CharacterListItem'
import NewCharacterDialog from './NewCharacterDialog'

const CharacterPageHome = () => {


    const [userCharacters, setUserCharacters] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [newCharacterOpen, setNewCharacterOpen] = useState(false)

    useEffect(() => {
        getCharacters()
            .then(data => {
                if (data) {
                    setUserCharacters(data)
                    setLoaded(true)
                }
            })
    }, [])

    const handleClose = () => {
        setNewCharacterOpen(false)
    }

    const submitNewCharacter = (newCharacter) => {
        createCharacter(newCharacter)
        .then(data => {
            if (!data.errors){
                setUserCharacters([...userCharacters, data])
            }
        })

    }

    const handleDeleteCharacter = (item) => {
        //Add another dialog for confirmation.... eventually
        deleteCharacter(item.id)
        .then(data => {
            if (data.ok) {
                setUserCharacters(userCharacters.filter(character => character.id !== item.id))
            }
        })
    }

    return (
        <div className='character-details'>
            <h2>Your Characters</h2>
            <div className='character-details-container'>
                <Button onClick={() => setNewCharacterOpen(true)} variant='contained'>Create New Character</Button>
                <NewCharacterDialog handleClose={handleClose} handleNewCharacterSubmit={submitNewCharacter} open={newCharacterOpen} />
                {loaded ?
                    userCharacters.map(item => <CharacterListItem handleDeleteCharacter={handleDeleteCharacter} key={item.id} data={item} />) 
                    :
                    null}
            </div>
        </div>
    )
}

export default CharacterPageHome
