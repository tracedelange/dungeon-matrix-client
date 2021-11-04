import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'

const NewChatItem = ({ submitMessage }) => {

    const [message, setMessage] = useState('')

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    return (

        <form className='new-chat-item' onSubmit={(e) => {
            submitMessage(e, message)
            setMessage('')
        }}>
            <TextField value={message} fullWidth onChange={handleMessageChange} />
            <Button type='submit' variant='contained'>send</Button>
        </form>

    )
}

export default NewChatItem
