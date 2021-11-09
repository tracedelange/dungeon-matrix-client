import TimeAgo from 'javascript-time-ago'

export const baseURL = process.env.REACT_APP_API_BASE_URL
export const websocket = process.env.REACT_APP_WEBSOCKET_URL

export const getAge = (epochTime) => {
    const timeAgo = new TimeAgo('en-US')
    const now = new Date()
    const dif = now.getTime() - Date.parse(epochTime)
    return timeAgo.format(now.getTime() - dif)
}
