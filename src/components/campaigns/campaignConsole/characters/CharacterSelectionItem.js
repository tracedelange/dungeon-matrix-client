import React from 'react'

const CharacterSelectionItem = ({ data, spawnCharacter, handleClose }) => {



    return (
        <div onClick={() => {
            spawnCharacter(data.id)
            handleClose()
        }} className='character-spawn-selection-item'>
            {data.name}
        </div>
    )
}

export default CharacterSelectionItem
