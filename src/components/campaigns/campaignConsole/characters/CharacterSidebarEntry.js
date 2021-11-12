import { useState } from 'react'
import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CharacterSelectionDialog from './CharacterSelectionDialog'

const CharacterSidebarEntry = ({ data, socket }) => {

    const user = useSelector(state => state.session)
    const mapCharacters = useSelector(state => state.grid.map_characters)

    const [characterSpawnSelectionOpen, setCharacterSpawnSelectionOpen] = useState(false)




    const userCharacter = mapCharacters.find(item => item.username === user.username)

    const character = mapCharacters.find(item => item.user_id === data.id)

    const handleDialogClose = () => {
        setCharacterSpawnSelectionOpen(false)
    }

    const spawnCharacter = (characterID) => {
        // console.log(characterID)
        socket.spawnCharacter({ characterID: characterID, userID: user.id })
    }



    return (
        <div className='canvas-character-entry'>

            {user.id == data.id ?
                userCharacter ?
                    // "logged user has a spawned character"
                    userCharacter.character.name
                    :
                    // "Logged user has no character spawned"
                    <>
                        <Button onClick={() => setCharacterSpawnSelectionOpen(true)} variant='contained'>spawn character</Button>
                        <CharacterSelectionDialog spawnCharacter={spawnCharacter} open={characterSpawnSelectionOpen} handleClose={handleDialogClose} characters={data.characters} />
                    </>

                :
                character ?
                    <>
                        {character.character.name}
                    </>
                    :
                    <>
                    {data.username} - Hasn't spawned
                    </>
            }
        </div>
    )
}

export default CharacterSidebarEntry
