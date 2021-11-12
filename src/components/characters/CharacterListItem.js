import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { avatars } from '../../avatarIndex'

const CharacterListItem = ({data, handleDeleteCharacter}) => {
    console.log(data)
    return (
        <div className='character-list-item'>
            <img className='character-list-avatar-image' src={avatars[data.avatar_index]} />
            {data.name}
            <ClearIcon onClick={() => handleDeleteCharacter(data)} className='character-list-item-delete'/> 
        </div>
    )
}

export default CharacterListItem
