import React, {useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'
import ChatLogItem from './ChatLogItem'

const ChatLogs = () => {

    const user = useSelector(state => state.session)
    const campaignLogs = useSelector(state => state.campaigns.campaignLogs)
    const chatLogArray = campaignLogs.map(item => <ChatLogItem user={user} key={item.id} data={item} />)

    const chatLogsBottom = useRef(null)


    useEffect(() => {

        chatLogsBottom.current.scrollIntoView({ behavior: 'smooth' });

    }, [chatLogArray])

    return (
        <ul className='chat-logs'>
            {chatLogArray}
            <li ref={chatLogsBottom}></li>
        </ul>
    )
}

export default ChatLogs
