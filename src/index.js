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
    "validation": null,  
    "word": {},
    "points": {},
    "level": [
        level1, 
        level2, 
        level3 
    ]
}

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

const store = createStore(reducer, initialState)

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>
    , document.getElementById('app')
    )