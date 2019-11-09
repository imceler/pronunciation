import { actionNames } from '../actions/index'

const reducer = (state, action) => {
    switch (action.type) { 
        case actionNames.validation:
            return {
                ...state,
                matched: action.payload, 
            } 
        case actionNames.increasePoints:
            return {
                ...state,
                points: state.points + 1, 
            } 
        case actionNames.resetPoints:
            return {
                ...state,
                points: 0, 
            } 
        case actionNames.levelUp:
            return {
                ...state,
                level: state.level + 1, 
            } 
        case actionNames.levelAlert:
            return {
                ...state,
                nextLevel: action.payload, 
            } 
        case actionNames.addWordToSay:
            return {
                ...state,
                word: state.word = action.payload 
            } 
        case actionNames.resetGame:
            return {
                ...state,
                word: state.word = '',
                points: state.points = 0,
                level: state.level = 0,
                nextLevel: state.nextLevel = false,
            } 
        default: 
            return state;
     }
}

export default reducer