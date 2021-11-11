import React from 'react'
import NavBar from './NavBar'
import Campaigns from '../campaigns/Campaigns'
import { Switch, Route } from 'react-router-dom'
import SelectionOptions from './SelectionOptions'
import CharacterPageHome from '../characters/CharacterPageHome'
import AccountPage from './AccountPage'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import CampaignSession from '../campaigns/CampaignSession'
import CampaignDetailsPage from '../campaigns/CampaignDetailsPage'

TimeAgo.addDefaultLocale(en)

const HomePage = () => {


    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/campaigns'>
                    <Campaigns />
                </Route>
                <Route exact path='/campaigns/:id'>
                    <CampaignSession />
                </Route>
                <Route exact path='/campaigns/config/:id'>
                    <CampaignDetailsPage />
                </Route>
                <Route exact path='/characters'>
                    <CharacterPageHome />
                </Route>
                <Route exact path='/maps'>
                    {/* <Campaigns /> */}
                </Route>
                <Route exact path='/account'>
                    <AccountPage />
                </Route>
                <Route path='/'>
                    <SelectionOptions />
                </Route>
            </Switch>
            
        </div>
    )
}

export default HomePage
