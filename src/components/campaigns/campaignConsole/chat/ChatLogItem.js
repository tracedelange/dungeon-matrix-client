import React from 'react'
import { getAge } from '../../../../globals'
import { Tooltip } from '@mui/material'

const ChatLogItem = ({ data, user }) => {

    // console.log(data)
    // console.log(user)
    return (
        <li className={data.author === user.username ? 'chat-log-item owned-chat-item' : 'chat-log-item'} >
            <p>[{data.author}, {getAge(data.created_at)}]: {data.content}</p>
        </li>
    )
}

export default ChatLogItem
