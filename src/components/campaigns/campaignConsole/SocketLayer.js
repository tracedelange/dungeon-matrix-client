import React, {useState, useEffect} from 'react'
import { getCampaignData } from '../../../requests'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ChatContainer from '../campaignConsole/chat/ChatContainer'
import Cable from 'actioncable'
import { websocket } from '../../../globals'

const SocketLayer = () => {

    const dispatch = useDispatch()
    const campaignData = useSelector(state => state.campaigns.selectedCampaign)
    const userData = useSelector(state => state.session)

    const [socket, setSocket] = useState({})
    const [connected, setConnected] = useState(false)

    useEffect(()=>{

        console.log('selected campaign has been changed')
        setSocket({})
        setConnected(false)

    },[campaignData])


    const createSocket = () => {

        let cable = Cable.createConsumer(websocket);
        const chatsConnection = cable.subscriptions.create({
            channel: 'ChatChannel',
            id: campaignData.id,
            user_id: userData.id
        }, {
            connected: () => {
                // console.log(`connected to channel ${campaignData.id}`)
                // chatsConnection.perform('newUserConnected')
            },
            received: async (data) => {
                const resp = await JSON.parse(data);
                switch(resp.type){
                    case "new_message":
                        dispatch({type: 'SET_MESSAGES', payload: resp.chat_messages})
                    default:
                        return
                }

                // dispatch(addMessage(resp))
            },
            disconnected: () => {
                // chatsConnection.perform('userHasLeft')
            },
            create_message: function (chatContent) {
                chatsConnection.perform('create', {
                    content: chatContent
                });
            }
        });

        setSocket(chatsConnection)
        setConnected(true)
    }

    useEffect(() => {
        if (!connected) {
            createSocket();
        }
    }, [connected])

    return (
        <div>
            <ChatContainer socket={socket} />
        </div>
    )
}

export default SocketLayer
