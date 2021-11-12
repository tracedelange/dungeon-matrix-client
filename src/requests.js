import { baseURL } from "./globals";

export const submitSignup = async (signupObject) => {
    const method = "POST"
    const headers = { "Content-Type": "application/json" }
    const body = signupObject
    const response = await fetch(`${baseURL}/signup`, { method: method, headers: headers, body: JSON.stringify(body) })
    const data = await response.json()
    return data
}

export const submitLogin = async (loginObject) => {
    const method = "POST"
    const headers = { "Content-Type": "application/json" }
    const body = loginObject
    const response = await fetch(`${baseURL}/login`, { method: method, headers: headers, body: JSON.stringify(body) })
    const data = await response.json()
    return data
}

export const getUserInfo = async () => {
    let token = localStorage.getItem('jwt')
    const method = "GET"
    const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
    const response = await fetch(`${baseURL}/me`, { method: method, headers: headers })
    const data = await response.json()
    return data
}


export const getCampaigns = async () => {
    let token = localStorage.getItem('jwt')
    const method = "GET"
    const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
    const response = await fetch(`${baseURL}/campaigns`, { method: method, headers: headers })
    const data = await response.json()
    return data
}

export const getCampaignData = async (campaignID) => {
    let token = localStorage.getItem('jwt')
    const method = "GET"
    const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
    const response = await fetch(`${baseURL}/campaigns/${campaignID}`, { method: method, headers: headers })
    const data = await response.json()
    return data
}



export const createCampaign = async (campaignTitle) => {
    let token = localStorage.getItem('jwt')
    const method = "POST"
    const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
    const response = await fetch(`${baseURL}/campaigns?title=${campaignTitle}`, { method: method, headers: headers })
    const data = await response.json()
    return data
}


export const addUserToCampaign = async (username, campaignId) => {
    let token = localStorage.getItem('jwt')
    const method = "POST"
    const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
    const response = await fetch(`${baseURL}/campaign_users?username=${username}&campaign_id=${campaignId}`, { method: method, headers: headers })
    const data = await response.json()
    return data
}

export const removeUserFromCampaign = async (user_id, campaignId) => {
    let token = localStorage.getItem('jwt')
    const method = "DELETE"
    const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
    const response = await fetch(`${baseURL}/campaign_users?user_id=${user_id}&campaign_id=${campaignId}`, { method: method, headers: headers })
    return response
}

export const getCharacters = async () => {
    let token = localStorage.getItem('jwt')
    const method = "GET"
    const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
    const response = await fetch(`${baseURL}/characters`, { method: method, headers: headers })
    const data = await response.json()
    return data
}
export const createCharacter = async (character) => {
    let token = localStorage.getItem('jwt')
    const method = "POST"
    const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
    const response = await fetch(`${baseURL}/characters?name=${character.name}&avatar_index=${character.avatar_index}&health=${character.health}`, { method: method, headers: headers })
    const data = await response.json()
    return data
}
export const deleteCharacter = async (characterID) => {
    let token = localStorage.getItem('jwt')
    const method = "DELETE"
    const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
    const response = await fetch(`${baseURL}/characters/${characterID}`, { method: method, headers: headers })
    return response
}

