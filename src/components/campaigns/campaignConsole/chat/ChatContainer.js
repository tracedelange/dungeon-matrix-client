import React, { useState } from 'react'
import NewChatItem from './NewChatItem';
import ChatLogs from './ChatLogs';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ChatContainer = ({ socket }) => {

    const [open, setOpen] = useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const submitMessage = (e, message) => {
        e.preventDefault()
        socket.create_message(message)
    }


    return (

        <>
            {open ?
                <ArrowBackIcon className='chat-control-icon-open' onClick={() => setOpen(!open)} />
                :
                <ArrowForwardIcon className='chat-control-icon-closed' onClick={() => setOpen(!open)} />
            }
            <div className='chat-container' className={open ? 'chat-container' : 'chat-container closed'}>
                <ChatLogs />
                <NewChatItem submitMessage={submitMessage} />
            </div>
        </>
    )
}

export default ChatContainer
