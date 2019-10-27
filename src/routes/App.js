import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from '../containers/Home'
import Game from '../containers/Game'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/game' component={Game} />
        </Switch>
    </BrowserRouter>
    )
    
export default App