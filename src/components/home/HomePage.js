import React from 'react'
import NavBar from './NavBar'
import Campaigns from '../campaigns/Campaigns'
import { Switch, Route } from 'react-router-dom'
import SelectionOptions from './SelectionOptions'
import CharacterPageHome from '../characters/CharacterPageHome'
import AccountPage from './AccountPage'

const HomePage = () => {


    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/campaigns'>
                    <Campaigns />
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
