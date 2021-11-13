import React, {useState, useEffect} from 'react'
import { getCampaignData } from '../../../requests'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ChatContainer from '../campaignConsole/chat/ChatContainer'
import Cable from 'actioncable'
import { websocket } from '../../../globals'
import MainStage from './canvas/MainStage'
import CharacterContainer from './characters/CharacterContainer'
import DisplayOptions from './options/DisplayOptions'
import DMConsole from './dmTools/DMConsole'

const SocketLayer = () => {

    const dispatch = useDispatch()
    const campaignData = useSelector(state => state.campaigns.selectedCampaign)
    const userData = useSelector(state => state.session)

    const [socket, setSocket] = useState({})
    const [connected, setConnected] = useState(false)

    const gridConfiguration = useSelector(state => state.grid.configuration)

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
            user_id: userData.id,
            gridConfiguration: gridConfiguration
        }, {
            connected: () => {
                console.log(`connected to channel ${campaignData.id}`)
                chatsConnection.perform('getSessionData')
            },
            received: async (data) => {
                const resp = await JSON.parse(data);
                switch(resp.type){
                    case "new_message":
                        dispatch({type: 'SET_MESSAGES', payload: resp.chat_messages})
                        break;
                    case "map_data":
                        console.log(resp.map_data)
                        dispatch({type: 'SET_MAP_ELEMENTS', payload: resp.map_data})
                        break;
                    default:
                        return;
                }

                // dispatch(addMessage(resp))
            },
            spawnCharacter: (spawnObject) => {
                chatsConnection.perform('spawnUser', spawnObject)
            },
            updateUserPosition: (position) => {
                chatsConnection.perform('updateUserPosition', position)
            },
            generateMap: (request) => {
                chatsConnection.perform('generateMap', request)
            },
            clearMap: () => {
                chatsConnection.perform('clearMap')
            },
            spawnElement: (elementObject) => {
                chatsConnection.perform('spawnElement', elementObject)
            },
            updateCharacterHealth: (newHealth) => {
                chatsConnection.perform('updateCharacterHealth', newHealth)
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

    console.log(userData)
    console.log(campaignData)

    return (
        <div className='session-container'>
            <ChatContainer socket={socket} />
            {campaignData.is_dm ? <DMConsole socket={socket}/> :null}
            <MainStage socket={socket} />
            <DisplayOptions socket={socket} />
            <CharacterContainer socket={socket} />

        </div>
    )
}

export default SocketLayer
