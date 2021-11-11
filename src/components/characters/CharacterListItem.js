import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';

const CharacterListItem = ({data, handleDeleteCharacter}) => {
    return (
        <div className='character-list-item'>
            {data.name}
            <ClearIcon onClick={() => handleDeleteCharacter(data)} className='character-list-item-delete'/> 
        </div>
    )
}

export default CharacterListItem
