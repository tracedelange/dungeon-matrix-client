import { useState } from 'react'
import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CharacterSelectionDialog from './CharacterSelectionDialog'
import { avatars } from '../../../../avatarIndex'
import HealthBar from './HealthBar'


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
                    <>
                        <img className='sidebar-avatar' src={avatars[userCharacter.character.avatar_index]} />
                        {userCharacter.character.name}
                        <div className='grower'></div>
                        <HealthBar socket={socket} data={userCharacter.character} player={true} />
                    </>
                    :
                    // "Logged user has no character spawned"
                    <>
                        <Button onClick={() => setCharacterSpawnSelectionOpen(true)} variant='contained'>spawn character</Button>
                        <CharacterSelectionDialog spawnCharacter={spawnCharacter} open={characterSpawnSelectionOpen} handleClose={handleDialogClose} characters={data.characters} />
                    </>

                :
                character ?
                    <>
                        <img className='sidebar-avatar' src={avatars[character.character.avatar_index]} />
                        {character.character.name}
                        <div className='grower'></div>
                        <HealthBar data={character.character} player={false} />
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
