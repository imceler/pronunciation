import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore} from 'redux';  
import App from './routes/App'
import reducer from './reducers/index'

const level1 = [
    'Blue',
    'Red',
    'Yellow',
    'Gray',
    'Black',
    'White',
    'Purple',
    'Pink',
    'Brown'
]
const level2 = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10'
]
const level3 = [
    'I',
    'You',
    'He',
    'She',
    'It',
    'They',
    'We'
]

const initialState = {  
    "nextLevel": false,
    "actualLevel": 0,
    "points": 0,
    "matched": null,  
    "level": [
        level1, 
        level2, 
        level3 
    ]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, initialState, composeEnhancers)

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>
    , document.getElementById('app')
    )