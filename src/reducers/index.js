const reducer = (state, action) => {
    switch (action.type) { 
        case 'VALIDATION':
            return {
                ...state,
                matched: action.payload, 
            } 
        case 'INCREASE_POINTS':
            return {
                ...state,
                points: state.points + 1, 
            } 
        case 'RESET_POINTS':
            return {
                ...state,
                points: 0, 
            } 
        case 'SET_NEXT_LEVEL':
            return {
                ...state,
                points: action.payload, 
            } 
        case 'LEVEL_UP':
            return {
                ...state,
                actualLevel: state.actualLevel + 1, 
            } 
        default: 
            return state;
     }
}

export default reducer