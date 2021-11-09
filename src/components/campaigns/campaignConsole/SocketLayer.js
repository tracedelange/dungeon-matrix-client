import React, {useState, useEffect} from 'react'
import { getCampaignData } from '../../../requests'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ChatContainer from '../campaignConsole/chat/ChatContainer'
import Cable from 'actioncable'
import { websocket } from '../../../globals'
import MainStage from './canvas/MainStage'

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
                console.log(`connected to channel ${campaignData.id}`)
                chatsConnection.perform('getSessionData')
            },
            received: async (data) => {
                const resp = await JSON.parse(data);
                console.log(resp.type)
                switch(resp.type){
                    case "new_message":
                        dispatch({type: 'SET_MESSAGES', payload: resp.chat_messages})
                        break;
                    case "map_data":
                        dispatch({type: 'SET_MAP_CHARACTERS', payload: resp.map_data.map_characters})
                        break;
                    default:
                        return;
                }

                // dispatch(addMessage(resp))
            },
            updateUserPosition: (position) => {
                chatsConnection.perform('updateUserPosition', position)
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
        <div className='session-container'>
            <ChatContainer socket={socket} />
            <MainStage socket={socket} />
        </div>
    )
}

export default SocketLayer
