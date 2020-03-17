import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Home from '../containers/Home'
import Game from '../containers/GameContainer'

const App = () => (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/game' component={Game} />
        </Switch>
    </HashRouter>
    )
    
export default App